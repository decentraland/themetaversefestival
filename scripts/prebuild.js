/* eslint-disable */
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

let ENV_CONTENT = {};

// read files
if (fs.existsSync(".env")) {
  Object.assign(ENV_CONTENT, dotenv.parse(fs.readFileSync(".env")));
}
const packageJson = JSON.parse(fs.readFileSync("./package.json").toString());

// set version
ENV_CONTENT["GATSBY_WEBSITE_VERSION"] = packageJson.version;

// set public url
Object.assign(ENV_CONTENT, getPublicUrls());
packageJson.homepage = ENV_CONTENT["ASSET_PREFIX"];
if (packageJson.homepage) {
  // github action outputs. Do not touch.
  console.log("::set-output name=public_url::" + packageJson.homepage);
  console.log(
    "::set-output name=public_path::" + new URL(packageJson.homepage).pathname
  );
}

// log stuff
console.log("VERSIONS: ", Object.entries(ENV_CONTENT), "\n");

// save files
fs.writeFileSync(
  ".env.production",
  Object.entries(ENV_CONTENT)
    .map((e) => e[0] + "=" + JSON.stringify(e[1]))
    .join("\n") + "\n"
);
fs.writeFileSync("./package.json.tmp", JSON.stringify(packageJson, null, 2));

// public url logic
function getPublicUrls() {
  const isStatic = !!process.env.GEN_STATIC_LOCAL;
  const isCI = !!process.env.CI;
  const isCDN = !isStatic && isCI;
  console.log("is static", isStatic);
  console.log("is CI", isCI);
  console.log("is CDN", isCDN);
  if (isCDN) {
    // master/main branch, also releases
    const cdnUrl = `https://cdn.decentraland.org/${packageJson.name}/${packageJson.version}`;
    console.log(`Using CDN as public url: "${cdnUrl}"`);
    return {
      ASSET_PREFIX: cdnUrl,
    };
  }
  // localhost
  console.log("Using empty pubic url");
  return {
    ASSET_PREFIX: "",
  };
}

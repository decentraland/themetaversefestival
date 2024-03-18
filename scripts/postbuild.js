const fs = require("fs");

const PACKAGE_JSON_PUBLIC_PATH = "./public/package.json";
const PACKAGE_JSON_TEMP_PATH = "./package.json.tmp";

fs.copyFileSync(PACKAGE_JSON_TEMP_PATH, PACKAGE_JSON_PUBLIC_PATH);
fs.unlinkSync(PACKAGE_JSON_TEMP_PATH);

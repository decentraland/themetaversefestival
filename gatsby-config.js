module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "metaverse-festival",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-humans-txt`,
      options: {
        team: [
          {
            Developer: `Francisco Aboy`,
            GitHub: `https://github.com/francisco-zx`,
          },
          {
            Designer: 'GM Studios',
            LinkedIn: 'https://github.com/gmstudiosgg'
          }
        ],
        site: {
          'Last update': `2022/10/08`,
          Standards: `JavaScript`,
          Components: `humans-generator`,
          Softwares: `Visual Studio Code, Mac OSX, Adobe Illustrator`
        },
        note: `Made in Buenos Aires, Argentina.`
      }
    }
  ],
};

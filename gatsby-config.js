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
            Developer: `Guido La Rosa`,
            GitHub: `https://github.com/guidolarosa`,
          },
          {
            Designer: 'Guillermina Teves Bejar',
            LinkedIn: 'https://www.linkedin.com/in/guillermina-teves-bejar-4a0265154/?originalSubdomain=ar'
          }
        ],
        site: {
          'Last update': `2021/4/16`,
          Standards: `JavaScript`,
          Components: `humans-generator`,
          Softwares: `Visual Studio Code, Mac OSX, Adobe Illustrator`
        },
        note: `Made in Buenos Aires, Argentina.`
      }
    }
  ],
};

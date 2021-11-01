module.exports = {
  siteMetadata: {
    siteUrl: "https://www.rodrigogross.me",
    title: "Rgl Site",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rgl Site`,
        short_name: `Rgl Site`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b71c1c`,
        display: `standalone`,
        icon: "./src/assets/images/logo.png",
        crossOrigin: "use-credentials",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/app_common/app/App`),
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-offline",
  ],
};

module.exports = {
  siteMetadata: {
    title: `Matthew Frucht`,
    description: `I am a Rising Senior studying Information Science at Cornell University.`,
    author: "Matthew Frucht",
    url: "https://www.matthewfrucht.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matthew Frucht`,
        short_name: `Matt`,
        start_url: `/`,
        background_color: `#41B3A3`,
        theme_color: `#41B3A3`,
        display: `minimal-ui`,
        icon: `src/images/m-icon.png`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
  ],
}

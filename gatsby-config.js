module.exports = {
  siteMetadata: {
    title: `Matthew Frucht`,
    description: `I am an Information Science Junior at Cornell University.`,
    author: "Matthew Frucht",
    url: "https://www.matthewfrucht.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "spreadsheet",
        fieldName: "books",
        // Url to query from
        url: "https://spreadsheets.google.com/feeds/list/1jnx-EtvvW5ex7ZyZQ2RwMChqX7-lvpEHQl3lMZGW5qI/od6/public/values?alt=json",
      },
    },

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

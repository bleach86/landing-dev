module.exports = {
  siteMetadata: {
    title: 'Garlicoin',
    description:
      "The new, friendly, decentralized cryptocurrency you've never heard of.",
    keywords: 'cryptocurrency, garlicoin, blockchain, open source'
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Garlicoin`,
        short_name: `Garlicoin`,
        start_url: `/`,
        theme_color: `#f2c94c`,
        background_color: `#ffffff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/favicon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-zopfli`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-131680351-1',
        // Puts tracking script in the head instead of the body
        head: false,
        anonymize: true,
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: []
      }
    }
  ]
};

// pathPrefix: '/garlicoin-web-prod'

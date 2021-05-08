/**
1300
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ha Phan Tran - Your Trusted Data Expert",
    description: "This is Ha Phan Tran's Website - Your Trusted Data Expert" ,
    titleTemplate: `%s | Ha Phan Tran`,
    author: "@haphantran",
    igUsername: "@haphantran",
    image: "/twitter-img.png",
    url: "https://haphantran.com",
  },
  plugins:  [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://haphantran-com-strapi-backend.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`, `blogs`],
        //If using single types place them in this array.
        singleTypes: [`about`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
  ],
}

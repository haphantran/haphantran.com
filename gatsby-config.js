/**
1300
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ha Phan Tran - Your Trusted Data Expert",
    description: "This is Ha Phan Tran Website",
    author: "@webdev",
    twitterUsername: "@haphantran",
    image: "/twitter-img.png",
    siteUrl: "https://haphantran.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
 },
    {
      resolve: `gatsby-source-strapi`,
      options: {
      apiURL: `https://haphantran-com-strapi-backend.herokuapp.com`,
        queryLimit: 1000, // Default to 100
         contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!

      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: { 
        fonts: [
          `Roboto\:400,700`,
           `Open Sans`,
                                                             ,
              ],
      },
    },
  ],
}

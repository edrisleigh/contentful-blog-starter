require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Contentful Starter`,
    description: `A blog with contentful (CMS): A headless content management system (CMS) that allows you to create, manage, and deliver content to your blog through a user-friendly interface.`,
    author: `@EdrisaLeigh`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken:
          process.env.NODE_ENV === "production"
            ? process.env.CONTENTFUL_TOKEN
            : CONTENTFUL_PREVIEW_TOKEN,
        host:
          process.env.NODE_ENV === "production"
            ? process.env.CONTENTFUL_HOST
            : CONTENTFUL_PREVIEW_HOST,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-contentful-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}

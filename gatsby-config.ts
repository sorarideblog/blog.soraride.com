import type { GatsbyConfig } from 'gatsby'
import dotenv from 'dotenv'
import path from 'path'

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config()
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'My Blog',
    author: 'soraride',
    description: 'ブログ',
    email: 'sorarideblog@gmail.com',
    // If you didn't use the resolveSiteUrl option this needs to be set: for gatsby-plugin-sitemap
    siteUrl: `https://sorarideblog.com`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    }
  ]
}
export default config

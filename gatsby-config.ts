import type { GatsbyConfig } from 'gatsby'
import dotenv from 'dotenv'

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config()
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'My Blog',
    author: 'soraride',
    description: 'ブログ',
    email: 'sorarideblog@gmail.com'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken
      }
    }
  ]
}
export default config

import type { GatsbyConfig } from 'gatsby'
import dotenv from 'dotenv'
import path from 'path'

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config()
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jun's Blog`,
    author: 'soraride',
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
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          `gatsby-remark-code-titles`,
          `gatsby-remark-autolink-headers`,
          // gatsby-remark-prismjs を使うときには
          // gatsby-remark-autolink-headers よりも後ろに書く
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },
          `gatsby-remark-check-links`,
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              // デフォルトは _blank
              target: '_self',
              // デフォルトは nofollow noopener noreferrer
              rel: 'noopener noreferrer'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://sorarideblog.com',
        sitemap: 'https://sorarideblog.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
}
export default config

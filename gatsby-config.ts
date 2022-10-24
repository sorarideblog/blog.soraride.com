import type { GatsbyConfig } from 'gatsby'
import dotenv from 'dotenv'

if (process.env.ENVIRONMENT !== 'production') {
    dotenv.config()
}

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Jun's Blog`,
        description: 'じゅんの手作りブログ。技術系とか。製作物とか。',
        author: 'soraride',
        email: 'sorarideblog@gmail.com',
        // If you didn't use the resolveSiteUrl option this needs to be set: for gatsby-plugin-sitemap
        siteUrl: `https://sorarideblog.com`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        'gatsby-plugin-sass',
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-twitter`,
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-NMZ8FCT',
                includeInDevelopment: false,
                defaultDataLayer: { platform: 'gatsby' },

                // Specify optional GTM environment details.
                // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
                // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
                // dataLayerName: 'YOUR_DATA_LAYER_NAME',

                // Name of the event that is triggered
                // on every Gatsby route change.
                //
                // Defaults to gatsby-route-change
                // routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
                // Defaults to false
                enableWebVitalsTracking: true,
            },
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.spaceId,
                accessToken: process.env.accessToken,
                enableTags: true,
            },
        },
        // {
        //   resolve: `gatsby-source-filesystem`,
        //   options: {
        //     name: `images`,
        //     path: path.join(__dirname, `src`, `images`),
        //     ignore: [`**/.*`], // ignore files starting with a dot
        //   },
        // },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                footnotes: true,
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
                            noInlineHighlight: false,
                        },
                    },
                    `gatsby-remark-check-links`,
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            // デフォルトは _blank
                            target: '_blank',
                            // デフォルトは nofollow noopener noreferrer
                            rel: 'noopener noreferrer',
                        },
                    },
                    {
                        resolve: `gatsby-remark-link-card`,
                        options: {
                            //...
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `tomato`,
                // Disable the loading spinner.
                showSpinner: false,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://sorarideblog.com',
                sitemap: 'https://sorarideblog.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        `gatsby-plugin-lodash`,
    ],
}
export default config

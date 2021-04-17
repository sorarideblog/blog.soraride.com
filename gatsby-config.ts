import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'My Blog',
    author: 'soraride',
    description: 'ブログ',
    email: 'sorarideblog@gmail.com'
  },
  plugins: ['gatsby-plugin-sass']
}
export default config

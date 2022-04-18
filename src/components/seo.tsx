// src/components/seo.js
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  title: string
  description: string
}

const SEO: FC<Props> = ({ title, description }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: 'ja-jp' }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: `Jun's Blog`,
        },
        {
          property: `og:locale`,
          content: `ja_JP`,
        },
        {
          // Material UI: https://material-ui.com/getting-started/usage/#responsive-meta-tag
          name: 'viewport',
          content: 'minimum-scale=1, initial-scale=1, width=device-width',
        },
      ]}
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      ></link>
    </Helmet>
  )
}

export default SEO

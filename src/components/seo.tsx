// src/components/seo.js
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

const SEO: FC = () => {
  const description = 'じゅんの手作りブログ。技術系とか。製作物とか。'

  return (
    <Helmet
      htmlAttributes={{ lang: 'ja-jp' }}
      title={`Jun's Blog`}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:site_name`,
          content: `Dev Blog`
        },
        {
          property: `og:locale`,
          content: `ja_JP`
        }
      ]}
    />
  )
}

export default SEO

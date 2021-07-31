import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import { Layout } from '../../components/layout'
import SEO from '../../components/seo'

const Page: FC = () => {
  const pageTitle = 'オンライン作業部屋'
  const pageDescription = `個人でサービス開発した代表製作物の１つです。`

  return (
    <Layout>
      <SEO title={pageTitle} description={pageDescription}></SEO>
      <h2>{pageTitle}</h2>
      <p></p>

      <Link to="/">Topへ</Link>
    </Layout>
  )
}

export default Page

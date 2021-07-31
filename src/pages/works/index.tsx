import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import { Layout } from '../../components/layout'
import SEO from '../../components/seo'
import '../../styles/work.scss'

const Page: FC = () => {
  const pageTitle = '製作実績'
  const pageDescription = `これまで製作してきたものをまとめました。`

  return (
    <Layout>
      <SEO title={pageTitle} description={pageDescription}></SEO>
      <article id="portfolio">
        <h2>{pageTitle}</h2>
        <h3>オンライン作業部屋</h3>
        <p></p>
      </article>
    </Layout>
  )
}

export default Page

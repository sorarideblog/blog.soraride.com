import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'

const Page404: FC = () => (
    <Layout>
        <SEO title='404 Not Found' description='ページが見つかりません' />
        <h1>404 ページが見つかりません</h1>
        <Link to='/'>トップページへ</Link>
    </Layout>
)

export default Page404

import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import '../styles/index.scss'

const Page: FC = () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello, GatsbyJS!</p>
    <Link to="/about">About this blog</Link>
  </Layout>
)

export default Page

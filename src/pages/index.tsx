import React from 'react'
import type { FC } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'
import '../styles/index.scss'

const Page: FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulBlogPost {
        nodes {
          postTitle
          updatedAt
          id
          text {
            id
            text
          }
        }
      }
    }
    `)

    return (
  <Layout>
    <h1>Home</h1>
    <p>Hello, GatsbyJS!</p>

    {data.allContentfulBlogPost.nodes.map(({ id, postTitle, text }) => (
      <h3 key={id}>
        {postTitle}
        <p>
          {text.text}
        </p>
      </h3>
    ))}

    <Link to="/about">About this blog</Link>
  </Layout>
    )
}

export default Page

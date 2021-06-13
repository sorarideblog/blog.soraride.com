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
      <h1>ホーム</h1>
      <p>
        This blog is created by{' '}
        <a href="https://twitter.com/sorarideblog/">@sorarideblog</a>.
      </p>

      <article>
        <ul>
          {data.allContentfulBlogPost.nodes.map(({ id, postTitle, text }) => (
            <li key={id}>
              <Link to={'/post/' + id}>
                <div className="post">
                  <h3>{postTitle}</h3>
                  <p>{text.text}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </article>

      <Link to="/about">このブログについて</Link>
    </Layout>
  )
}

export default Page

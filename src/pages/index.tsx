import React from 'react'
import type { FC } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'
import { useMediaQuery } from 'react-responsive'
import '../styles/index.scss'

const Page: FC = () => {
  const isMobile: boolean = useMediaQuery({
    query: '(max-width: 1224px)'
  })

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
      <h2>記事一覧</h2>
      {/* <p>
        This blog is created by{' '}
        <a href="https://twitter.com/sorarideblog/">@sorarideblog</a>.
      </p> */}

      <article id="articles">
        <ul>
          {data.allContentfulBlogPost.nodes.map(
            ({ id, postTitle, text }: MapType) => (
              <li key={id}>
                {/* <div className="post"> */}
                <Link to={'/post/' + id}>
                  <div className="post">
                    <h3>{postTitle}</h3>
                    <p>{text.text}</p>
                  </div>
                </Link>
                {/* </div> */}
              </li>
            )
          )}
        </ul>
      </article>
    </Layout>
  )
}

// 暫定で作ってみた型
type MapType = {
  id: string
  postTitle: string
  text: {
    text: string
  }
}

export default Page

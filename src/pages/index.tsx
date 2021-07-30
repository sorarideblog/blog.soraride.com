import React from 'react'
import type { FC } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'
import { useMediaQuery } from 'react-responsive'
import '../styles/index.scss'

const Page: FC<QueryDataType> = ({ data }) => {
  // const isMobile: boolean = useMediaQuery({
  //   query: '(max-width: 1224px)'
  // })

  return (
    <Layout>
      <h2>記事一覧</h2>
      <article id="articles">
        <ul>
          {data.allContentfulBlogPost.edges.map(({ node }: BlogPost) => (
            <li key={node.id}>
              {/* <div className="post"> */}
              <Link to={'/post/' + node.id}>
                <div className="post">
                  <h3>{node.postTitle}</h3>
                  <p>{node.text.text}</p>
                </div>
              </Link>
              {/* </div> */}
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  )
}

// 暫定で作ってみた型
type BlogPost = {
  node: {
    id: string
    postTitle: string
    text: {
      text: string
    }
  }
}
type QueryDataType = {
  data: {
    allContentfulBlogPost: {
      edges: BlogPost[]
    }
  }
}

export const query = graphql`
  query MyQuery {
    allContentfulBlogPost {
      edges {
        node {
          id
          updatedAt
          postTitle
          text {
            text
          }
        }
      }
    }
  }
`

export default Page

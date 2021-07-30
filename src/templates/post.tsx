import React from 'react'
import '../styles/post.scss'
import { Layout } from '../components/layout'
import SEO from '../components/seo'

export default function Post({ pageContext }: any) {
  const { postTitle, updatedAt, slug } = pageContext.post
  const description = pageContext.post.description.description
  const body = pageContext.post.body.childMarkdownRemark.html

  return (
    <Layout>
      <SEO title={postTitle} description={description}></SEO>
      <div className="post-area">
        <div className="post-header">
          <h2>{postTitle}</h2>
          <p className="post-date">{updatedAt}</p>
        </div>
        <article>
          <div
            dangerouslySetInnerHTML={{ __html: body }}
            className="post-body"
          ></div>
        </article>
      </div>
    </Layout>
  )
}

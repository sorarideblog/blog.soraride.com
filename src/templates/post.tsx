import React from 'react'
import '../styles/post.scss'
import { Layout } from '../components/layout'

export default function Post({ pageContext }: any) {
  const { postTitle, updatedAt, slug, description } = pageContext.post
  const body = pageContext.post.body.childMarkdownRemark.html

  return (
    <Layout>
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

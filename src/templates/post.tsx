import React from 'react'
import '../styles/post.scss'
import { Layout } from '../components/layout'

export default function Post({ pageContext }: any) {
  const { postTitle, updatedAt } = pageContext.post
  const body = pageContext.post.text.text

  return (
    <Layout>
      <div className="post-area">
        <div className="post-header">
          <h2>{postTitle}</h2>
          <p className="post-date">{updatedAt}</p>
        </div>
        <article className="post-body">{body}</article>
      </div>
    </Layout>
  )
}

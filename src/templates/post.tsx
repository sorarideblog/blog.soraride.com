import React from 'react'
// import '../styles/post.css'
import { Layout } from '../components/layout'

export default function Post({ pageContext }: any) {
  const { postTitle, updatedAt } = pageContext.post
  const body = pageContext.post.text.text

  return (
    <Layout>
      <div className="post-header">
        <h1>{postTitle}</h1>
        <p className="post-date">{updatedAt}</p>
      </div>
      <div className="post-body">{body}</div>
    </Layout>
  )
}

import React, { FC } from 'react'
import '../styles/post.scss'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import info from '../utils/common'
import type { BlogPost } from '../types/blog-post'

// gatsby-node.jsでgraphqlで取得したデータが流し込まれる
const Post: FC<BlogPost> = (pageContext: BlogPost) => {
  const { postTitle, updatedAt } = pageContext.node
  const description = pageContext.node.description.description
  const body = pageContext.node.body.childMarkdownRemark.html

  return (
    <Layout>
      <SEO
        title={postTitle + ' | ' + info.siteTitle}
        description={description}
      ></SEO>
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

export default Post

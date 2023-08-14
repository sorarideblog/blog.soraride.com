import React, { FC } from 'react'
import '../styles/post.scss'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import info from '../utils/common'
import type { BlogPost } from '../types/blog-post'

type PostProps = {
    pageContext: BlogPost
}

// gatsby-node.jsでgraphqlで取得したデータが流し込まれる
const Post: FC<PostProps> = ({ pageContext }) => {
    const { postTitle, updatedAt, createdAt } = pageContext.node
    const description = pageContext.node.description.description
    const body = pageContext.node.body.childMarkdownRemark.html

    return (
        <Layout>
            <SEO
                title={postTitle + ' | ' + info.siteTitle}
                description={description}
            ></SEO>
            <div className='post-area'>
                <div className='post-header'>
                    <h2>{postTitle}</h2>
                    <div className='post-date'>更新 {updatedAt}</div>
                    <div className='post-date'>投稿 {createdAt}</div>
                </div>
                <article>
                    <div
                        dangerouslySetInnerHTML={{ __html: body }}
                        className='post-body'
                    ></div>
                </article>
            </div>
        </Layout>
    )
}

export default Post

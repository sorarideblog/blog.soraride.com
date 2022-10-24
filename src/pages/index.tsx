import React from 'react'
import type { FC } from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'
import '../styles/index.scss'
import SEO from '../components/seo'
import info from '../utils/common'
import type { BlogPost } from '../types/blog-post'

const Page: FC<QueryDataType> = ({ data }) => {
    return (
        <Layout>
            <SEO
                title={info.siteTitle}
                description={info.siteDescription}
            ></SEO>
            <h2>記事一覧</h2>
            <article id='articles'>
                <ul>
                    {data.allContentfulBlogPost.edges.map(
                        ({ node }: BlogPost) => (
                            <li key={node.id}>
                                <Link to={'/post/' + node.slug}>
                                    <div className='post'>
                                        <h3>{node.postTitle}</h3>
                                        <div>
                                            {node.description.description}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </article>
        </Layout>
    )
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
        allContentfulBlogPost(sort: { fields: updatedAt, order: DESC }) {
            edges {
                node {
                    updatedAt
                    postTitle
                    id
                    slug
                    description {
                        description
                    }
                }
            }
        }
    }
`

export default Page

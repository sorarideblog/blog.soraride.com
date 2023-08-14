import React from 'react'
import type { FC } from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'
import '../styles/index.scss'
import SEO from '../components/seo'
import info from '../utils/common'
import type { BlogPost } from '../types/blog-post'

const Page: FC<QueryDataType> = ({
    data,
    pageContext,
}: {
    data: any
    pageContext: any
}) => {
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
                                        <div className='createdAt'>
                                            {node.createdAt}
                                        </div>
                                        <div className='description'>
                                            {node.description.description}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </article>
            <div className='pagination'>
                <ul>
                    {pageContext.previousPagePath && (
                        <li>
                            <Link to={pageContext.previousPagePath} rel='prev'>
                                前のページへ
                            </Link>
                        </li>
                    )}
                    {pageContext.humanPageNumber > 3 && (
                        <li>
                            <Link to='/'>1</Link>
                        </li>
                    )}
                    {pageContext.humanPageNumber > 4 && <li>...</li>}
                    {pageContext.humanPageNumber > 2 && (
                        <li>
                            <Link
                                to={
                                    pageContext.humanPageNumber - 2 === 1
                                        ? '/'
                                        : `/page/${
                                              pageContext.humanPageNumber - 2
                                          }`
                                }
                            >
                                {pageContext.humanPageNumber - 2}
                            </Link>
                        </li>
                    )}
                    {pageContext.humanPageNumber > 1 && (
                        <li>
                            <Link
                                to={
                                    pageContext.humanPageNumber - 1 === 1
                                        ? '/'
                                        : `/page/${
                                              pageContext.humanPageNumber - 1
                                          }`
                                }
                            >
                                {pageContext.humanPageNumber - 1}
                            </Link>
                        </li>
                    )}
                    <li className='active'>{pageContext.humanPageNumber}</li>
                    {pageContext.humanPageNumber <
                        pageContext.numberOfPages - 1 && (
                        <li>
                            <Link
                                to={`/page/${pageContext.humanPageNumber + 1}`}
                            >
                                {pageContext.humanPageNumber + 1}
                            </Link>
                        </li>
                    )}
                    {pageContext.humanPageNumber <
                        pageContext.numberOfPages - 2 && (
                        <li>
                            <Link
                                to={`/page/${pageContext.humanPageNumber + 2}`}
                            >
                                {pageContext.humanPageNumber + 2}
                            </Link>
                        </li>
                    )}
                    {pageContext.humanPageNumber <
                        pageContext.numberOfPages - 3 && <li>...</li>}
                    {pageContext.humanPageNumber !==
                        pageContext.numberOfPages && (
                        <li>
                            <Link to={`/page/${pageContext.numberOfPages}`}>
                                {pageContext.numberOfPages}
                            </Link>
                        </li>
                    )}
                    {pageContext.nextPagePath && (
                        <li>
                            <Link to={pageContext.nextPagePath} rel='next'>
                                次のページへ
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
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
    query MyQuery($skip: Int!, $limit: Int!) {
        allContentfulBlogPost(
            sort: { fields: createdAt, order: DESC }
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    updatedAt
                    createdAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
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

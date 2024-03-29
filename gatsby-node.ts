import type { GatsbyNode } from 'gatsby'
import path from 'path'
import type { BlogPost } from 'src/types/blog-post'
import { paginate } from 'gatsby-awesome-pagination'

export const createPages: GatsbyNode['createPages'] = async ({
    graphql,
    actions: { createPage },
    reporter,
}) => {
    const result = await graphql(
        `
            {
                allContentfulBlogPost {
                    edges {
                        node {
                            updatedAt(
                                locale: "ja-JP"
                                formatString: "YYYY年MM月DD日"
                            )
                            createdAt(
                                locale: "ja-JP"
                                formatString: "YYYY年MM月DD日"
                            )
                            postTitle
                            id
                            body {
                                childMarkdownRemark {
                                    html
                                }
                            }
                            slug
                            description {
                                description
                            }
                        }
                    }
                }
            }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const { edges } = result.data.allContentfulBlogPost

    edges.forEach((edge: BlogPost) => {
        createPage({
            path: `/post/${edge.node.slug}/`,
            component: path.resolve('./src/templates/post.tsx'),
            context: edge,
        })
    })

    paginate({
        createPage,
        items: edges,
        itemsPerPage: 10,
        pathPrefix: ({ pageNumber }: { pageNumber: number }) =>
            pageNumber === 0 ? '/' : '/page',
        component: path.resolve('./src/templates/index.tsx'),
    })
}

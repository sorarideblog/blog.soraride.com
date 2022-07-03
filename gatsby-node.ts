import type { GatsbyNode } from 'gatsby'
import path from 'path'
import { BlogPost, BlogPostNode } from 'src/types/blog-post'

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions

  const result: any = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
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
    `,
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
}

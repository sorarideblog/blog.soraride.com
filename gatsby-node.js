// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
              id
              postTitle
              text {
                text
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

  edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.id}/`,
      component: path.resolve('./src/templates/post.tsx'),
      context: { post: edge.node }
    })
  })
}

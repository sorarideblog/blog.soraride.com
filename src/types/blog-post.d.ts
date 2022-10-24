export type BlogPostNode = {
    updatedAt: string
    id: string
    body: {
        childMarkdownRemark: {
            html: string
        }
    }
    postTitle: string
    slug: string
    description: {
        description: string
    }
}

export type BlogPost = {
    node: BlogPostNode
}

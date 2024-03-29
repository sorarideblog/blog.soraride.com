export type BlogPostNode = {
    updatedAt: string
    createdAt: string
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

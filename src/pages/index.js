import React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/home-layout"
import PostCard from "../components/post-card"
import SEO from "../components/seo"
import SectionTitle from "../components/common/section-title"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <HomeLayout rightMenuSticky={false}>
      <SEO title={siteTitle} />
      <SectionTitle>Latest Posts</SectionTitle>
      <div className="mt-5">
        {posts.map(({ node }) => (
          <PostCard key={node.fields.slug} node={node} />
        ))}
      </div>
    </HomeLayout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

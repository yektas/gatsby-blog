import React from "react"
import { graphql } from "gatsby"
import "../css/global.css"
import HomeLayout from "../components/home-layout"
import PostCard from "../components/post-card"
import SEO from "../components/seo"
import SectionTitle from "../components/common/section-title"

const BlogIndex = ({ data, location }) => {
  const { description } = data.site.siteMetadata
  const posts = data.allMdx.edges

  return (
    <HomeLayout rightMenuSticky={false}>
      <SEO
        type="website"
        title=""
        description={description}
        pathName={location.pathname}
      />
      <SectionTitle size="xl">Latest Posts</SectionTitle>
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
        description
        siteUrl
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

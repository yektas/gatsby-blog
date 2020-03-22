import React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/home-layout"
import PostCard from "../components/post-card"
import SectionTitle from "../components/common/section-title"

const BlogIndex = ({ data, location }) => {
  //const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  const rightMenu = () => {
    return (
      <ul>
        <li>DENEME</li>
        <li>DENEME1</li>
        <li>DENEME2</li>
        <li>DENEME3</li>
        <li>DENEME4</li>
      </ul>
    )
  }

  return (
    <HomeLayout rightMenu={rightMenu()} rightMenuSticky={false}>
      {/* <SEO title="All posts" /> */}
      {/* <Bio /> */}
      <SectionTitle>Latest Posts</SectionTitle>
      <div className="mt-5">
        {posts.map(({ node }) => (
          <PostCard node={node} />
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
        }
      }
    }
  }
`

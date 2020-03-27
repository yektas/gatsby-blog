import React from "react"
import { Link, graphql } from "gatsby"
import HomeLayout from "../components/home-layout"
import capitalize from "lodash/capitalize"
import TwoColumnLayout from "../components/two-column-layout"
import SectionTitle from "../components/common/section-title"
import PostCard from "../components/post-card"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMdx
  const posts = data.allMdx.edges
  return (
    <TwoColumnLayout>
      <div className="pb-8">
        <SectionTitle uppercase={false} size="2xl">
          {capitalize(tag)}
        </SectionTitle>
      </div>
      <div>
        <h3 className="float-right">{totalCount} posts</h3>
      </div>
      {posts.map(({ node }) => (
        <PostCard key={node.fields.slug} node={node} />
      ))}
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
    </TwoColumnLayout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
    ) {
      totalCount
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

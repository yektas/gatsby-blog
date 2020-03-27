import React from "react"
import { Link, graphql } from "gatsby"
import HomeLayout from "../components/home-layout"
import capitalize from "lodash/capitalize"
import TwoColumnLayout from "../components/two-column-layout"
import SectionTitle from "../components/common/section-title"
import PostCard from "../components/post-card"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const tagHeader = (tag, count) => {
  const countString = `${count} post${count === 1 ? "" : "s"}`
  return (
    <>
      <SectionTitle inline={true} uppercase={false} size="2xl">
        {capitalize(tag)}
      </SectionTitle>
      <h3 className="float-right">{countString}</h3>
    </>
  )
}

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMdx
  const posts = data.allMdx.edges

  return (
    <>
      <Navbar />
      <TwoColumnLayout header={tagHeader(tag, totalCount)}>
        {posts.map(({ node }) => (
          <PostCard key={node.fields.slug} node={node} />
        ))}
        {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      </TwoColumnLayout>
      <Footer />
    </>
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

import React from "react"
import capitalize from "lodash/capitalize"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import HomeLayout from "../components/home-layout"
import SectionTitle from "../components/common/section-title"
import SEO from "../components/seo"

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => {
  const tagList = group
  tagList.sort(function(a, b) {
    return b.totalCount - a.totalCount
  })

  return (
    <HomeLayout>
      <SEO title="All tags" type="website" pathName={location.pathname} />
      <div>
        <SectionTitle size="xl">Tags</SectionTitle>
        <div className="mt-4">
          <ul>
            {tagList.map(tag => (
              <li
                className="text-blue-500 hover:text-blue-400"
                key={tag.fieldValue}
              >
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  <strong>{capitalize(tag.fieldValue)}</strong> (
                  {tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HomeLayout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

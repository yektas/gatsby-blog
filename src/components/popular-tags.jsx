import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Badge from "./common/badge"

const PopularTags = () => {
  const data = useStaticQuery(graphql`
    query PopularTagsQuery {
      allMdx {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)
  const tagList = data.allMdx.group
  tagList.sort(function(a, b) {
    return b.totalCount - a.totalCount
  })

  return (
    <>
      {tagList.map(obj => (
        <Link to={`/tags/${obj.tag}`}>
          <Badge>{obj.tag}</Badge>
        </Link>
      ))}
    </>
  )
}

export default PopularTags

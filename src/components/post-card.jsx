import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

const PostCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div
      key={node.fields.slug}
      className="shadow-lg mb-10 rounded-lg transition duration-300 transform hover:scale-101"
    >
      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
        <Img
          className="rounded-t-lg "
          fluid={node.thumbnail.childImageSharp.fluid}
          alt={title}
        />
        <article className="p-5" key={node.fields.slug}>
          <header>
            <h3
              className="text-2xl"
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              {title}
            </h3>
            <small className="text-gray-600">{node.frontmatter.date}</small>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </section>
        </article>
      </Link>
    </div>
  )
}

export default PostCard

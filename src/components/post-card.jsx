import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const PostCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div class="shadow-lg mb-10 p-5">
      <article key={node.fields.slug}>
        <header>
          <h3
            class="text-2xl"
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small class="text-gray-600">{node.frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </section>
      </article>
    </div>
  )
}

export default PostCard

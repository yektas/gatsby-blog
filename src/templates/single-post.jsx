import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { MDXProvider } from "@mdx-js/react"
import { H1, H2, H3, H4, H5, P } from "../components/common/page-elements"
import Badge from "../components/common/badge"

import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Footer from "../components/footer"
import ToC from "../components/table-of-contents"
import { rhythm, scale } from "../utils/typography"

const components = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  h5: props => <H5 {...props} />,
  p: props => <P {...props} />,
  Badge,
}

const SinglePost = ({ data, pageContext, location }) => {
  const post = data.mdx
  let disqusConfig = {
    url: `${data.site.siteMetadata.siteUrl}${location.pathname}`,
    identifier: post.id,
    title: post.frontmatter.title,
  }
  const { previous, next } = pageContext
  return (
    <MDXProvider components={components}>
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto sm:pl-0 md:pl-0 lg:pl-0 xl:pl-40">
        <SEO
          pathName={location.pathname}
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={post.thumbnail.childImageSharp.fluid.src}
          imageAlt={post.frontmatter.thumbnailAlt}
          date={post.frontmatter.utcDate}
          tags={post.frontmatter.tags}
          updatedDate={post.frontmatter.utcUpdatedDate}
        />
        <main>
          <div className="lg:flex justify-end sm:ml-32 md:m-0 lg:m-0">
            <div
              id="content-wrapper"
              className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible"
            >
              <div id="content">
                <div id="app" className="flex">
                  <div className="pt-3 pb-16 sm:mt-24 md:mt-0 w-full">
                    <div className="flex">
                      <div
                        id="markdown"
                        className="markdown px-6 xl:px-12 w-full max-w-3xl mx-auto lg:mr-auto bg-white shadow-sm"
                      >
                        <article>
                          <header>
                            <h1
                              style={{
                                marginTop: rhythm(1),
                                marginBottom: 0,
                              }}
                            >
                              {post.frontmatter.title}
                            </h1>
                            <p
                              style={{
                                ...scale(-1 / 5),
                                display: `block`,
                                marginBottom: rhythm(1),
                              }}
                            >
                              {post.frontmatter.date}
                            </p>
                          </header>
                          <MDXRenderer>{post.body}</MDXRenderer>
                          <hr
                            style={{
                              marginBottom: rhythm(1),
                            }}
                          />
                        </article>
                      </div>

                      <div className="hidden xl:text-sm xl:block xl:w-1/4 xl:px-6">
                        <div className="top-16 flex flex-col justify-between overflow-y-auto sticky  max-h-(screen-16) pt-12 pb-4 -mt-12">
                          <ToC headings={post.tableOfContents.items} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disqus config={disqusConfig} />
        </main>
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>

      <Footer />
    </MDXProvider>
  )
}

export default SinglePost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        utcDate: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
        updatedDate(formatString: "MMMM DD, YYYY")
        utcUpdatedDate: updatedDate(formatString: "YYYY-MM-DDTHH:mm:ssZ")
        thumbnailAlt
        description
      }
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tableOfContents
      timeToRead
    }
  }
`

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import siteIcon from "../../content/assets/black.png"

const SEO = ({
  description,
  lang,
  meta,
  title,
  image,
  imageAlt,
  type,
  tags,
  pathName,
  date,
  updatedDate,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
            keywords
            siteUrl
            siteIconAlt
            siteName
            social {
              twitter
              twitterId
            }
          }
        }
      }
    `
  )

  const siteName = "@" + site.siteMetadata.siteName
  const metaType = type ? type : "article"
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image
    ? site.siteMetadata.siteUrl + image
    : site.siteMetadata.siteUrl + siteIcon
  const metaImageAlt = imageAlt ? imageAlt : site.siteMetadata.siteIconAlt
  const canonical = pathName ? `${site.siteMetadata.siteUrl}${pathName}` : null

  const articleMeta =
    metaType === "article"
      ? [
          {
            property: `article:published_time`,
            content: date,
          },
          {
            property: `article:modified_time`,
            content: updatedDate,
          },
          {
            property: `og:updated_time`,
            content: updatedDate,
          },
        ]
      : {}

  const articleTags =
    tags.length != 0
      ? tags.map(tag => {
          return {
            property: `article:tag`,
            content: tag,
          }
        })
      : {}

  const titleTemplate = ` | ${site.siteMetadata.title}`
  const siteTitle = title ? title + titleTemplate : site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: metaType,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          name: `twitter:site`,
          content: siteName,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:image:alt`,
          content: metaImageAlt,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:creator:id`,
          content: site.siteMetadata.social.twitterId,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(meta)
        .concat(articleTags)
        .concat(articleMeta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  tags: [],
  title: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["article", "website"]),
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  date: PropTypes.string,
  updatedDate: PropTypes.string,
  pathName: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default SEO

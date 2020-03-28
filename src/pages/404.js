import React from "react"
import { graphql } from "gatsby"

import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  return (
    <HomeLayout>
      <SEO title="404: Not Found" type="website" pathName={location.pathname} />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </HomeLayout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

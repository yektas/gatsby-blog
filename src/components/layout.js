import React from "react"
import Navbar from "./navbar"
import { rhythm } from "../utils/typography"
import "../css/global.css"
import PostLayout from "./post-layout"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto">
        <main>
          <PostLayout>{children}</PostLayout>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout

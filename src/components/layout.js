import React from "react"
import Navbar from "./navbar"
import "../css/global.css"
import PostLayout from "./post-layout"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto">
        <main>
          <PostLayout>{children}</PostLayout>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout

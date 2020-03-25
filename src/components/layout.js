import React from "react"
import Navbar from "./navbar"
import "../css/global.css"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto">
        <main></main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

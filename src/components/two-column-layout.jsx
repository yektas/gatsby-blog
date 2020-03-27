import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import capitalize from "lodash/capitalize"
import SectionTitle from "../components/common/section-title"

const TwoColumnLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:mx-24">
          <div className="grid col-gap-20 pt-10 mobile:px-6 mobile:grid-cols-1 sm:grid-cols-2 mt-5">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TwoColumnLayout

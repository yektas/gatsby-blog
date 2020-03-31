import React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
import styled from "styled-components"
import tw from "twin.macro"
import PropTypes from "prop-types"
import SectionTitle from "./common/section-title"
import PopularTags from "./popular-tags"

const MainColumn = styled.div``

const RightColumn = styled.div`
  ${tw`mobile:hidden col-span-1`}
  ${props => (!props.visible ? tw`hidden` : `visible`)}
`

const HomeLayout = ({ children, showRightColumn, rightColumnSticky }) => {
  const mainColumnGrid = !showRightColumn ? "sm:col-span-3" : "sm:col-span-2"
  return (
    <div className="min-h-full">
      <Navbar />
      <div className="flex">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="sm:mx-24">
            <div className="grid col-gap-20 pt-10 mobile:px-6 mobile:grid-cols-2 sm:grid-cols-3">
              <MainColumn className={"mobile:col-span-3 " + mainColumnGrid}>
                {children}
              </MainColumn>
              <RightColumn visible={showRightColumn}>
                <div className={rightColumnSticky ? "sticky top-20" : ""}>
                  <SectionTitle>Popular Tags</SectionTitle>
                  <div className="mt-5 mb-20">
                    <PopularTags />
                  </div>

                  <SectionTitle>Popular Posts</SectionTitle>
                  <div className="mt-5">
                    <ul>
                      <li>
                        <Link to="/">
                          -> Docker import export komutu kullanımı
                        </Link>
                      </li>
                      <li>
                        <Link to="/">-> How to be a python expert</Link>
                      </li>
                      <li>
                        <Link to="/">-> Writing Dockerfiles like a pro!</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </RightColumn>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

HomeLayout.propTypes = {
  showRightColumn: PropTypes.bool,
}

HomeLayout.defaultProps = {
  showRightColumn: true,
}

export default HomeLayout

import React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
import styled from "styled-components"
import tw from "twin.macro"
import SectionTitle from "./common/section-title"
import Badge from "./common/badge"

const MainColumn = styled.div`
  ${tw`mobile:col-span-3 sm:col-span-2`}
`

const RightColumn = styled.div`
  ${tw`mobile:hidden col-span-1`}
`

const HomeLayout = ({ children, rightMenu, rightMenuSticky }) => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:mx-24">
          <div className="grid col-gap-20 pt-10 mobile:px-6 mobile:grid-cols-2 sm:grid-cols-3">
            <MainColumn>{children}</MainColumn>
            <RightColumn>
              <div className={rightMenuSticky && "sticky top-20"}>
                <SectionTitle>Top Categories</SectionTitle>
                <div className="mt-5 mb-20">
                  <Link to="/2nd-post">
                    <Badge>React</Badge>
                  </Link>
                  <Link to="/2nd-post">
                    <Badge>React</Badge>
                  </Link>
                  <Link to="/2nd-post">
                    <Badge>React</Badge>
                  </Link>
                  <Link to="/2nd-post">
                    <Badge>React</Badge>
                  </Link>
                  <Link to="/2nd-post">
                    <Badge>React</Badge>
                  </Link>
                </div>

                <SectionTitle>Popular Posts</SectionTitle>
                <div className="mt-5">
                  <ul>
                    <Link>
                      <li>-> Docker import export komutu kullanımı</li>
                    </Link>
                    <Link>
                      <li>-> How to be a python expert</li>
                    </Link>
                    <Link>
                      <li>-> Writing Dockerfiles like a pro!</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </RightColumn>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default HomeLayout

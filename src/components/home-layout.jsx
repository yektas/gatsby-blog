import React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
import styled from "styled-components"
import tw from "twin.macro"
import SectionTitle from "./common/section-title"
import Badge from "./common/badge"

const MainColumn = styled.div`
  ${tw`sm:col-span-2`}
`

const RightColumn = styled.div`
  ${tw`mobile:hidden col-span-1`}
`

const HomeLayout = ({ children, rightMenu, rightMenuSticky }) => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="mx-24">
          <div className="grid col-gap-20 pt-32 mobile:grid-cols-2 grid-cols-3">
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

        {/* <div class="lg:flex -mx-6"> 
          <div
            id="content-wrapper"
            class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5"
          >
            <div id="content">
              <div id="app" class="flex">
                <div class="pt-24 pb-16 lg:pt-28 w-full">
                  <div class="flex">
                    <div class=""></div>
                    <div class=" markdown px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
                      {children}
                    </div>

                    <div class="hidden xl:text-sm xl:block xl:w-1/4 xl:px-6">
                      <div class="top-16 flex flex-col justify-between overflow-y-auto sticky  max-h-(screen-16) pt-12 pb-4 -mt-12">
                        {sideMenu}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Footer />
      </div>
    </>
  )
}

export default HomeLayout

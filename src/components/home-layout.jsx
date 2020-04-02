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

const HomeLayout = ({
  children,
  showRightColumn,
  rightColumnSticky,
  popularPosts,
  allPosts,
}) => {
  const mainColumnGrid = !showRightColumn ? "sm:col-span-3" : "sm:col-span-2"
  const popularPostList = []
  popularPosts.forEach(popPost => {
    allPosts.forEach(post => {
      if ("/" + popPost.node.slug + "/" === post.node.fields.slug) {
        popularPostList.push({ rank: popPost.node.rank, post: post.node })
      }
    })
  })

  popularPostList.sort(function(a, b) {
    return a.rank - b.rank
  })

  return (
    <div className="min-h-full">
      <Navbar />
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
                    {popularPostList.map(popPost => (
                      <Link to={popPost.post.fields.slug}>
                        <li
                          className="transition duration-300 ease-in-out transform hover:translate-x-2"
                          key={popPost.rank}
                        >
                          <span className="pr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              className="fill-current inline text-yellow-400"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </span>
                          {popPost.post.frontmatter.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </RightColumn>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

HomeLayout.propTypes = {
  showRightColumn: PropTypes.bool,
  popularPosts: PropTypes.array,
  rightColumnSticky: PropTypes.bool,
}

HomeLayout.defaultProps = {
  showRightColumn: true,
  popularPosts: [],
}

export default HomeLayout

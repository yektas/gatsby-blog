import React from "react"
import SectionTitle from "./common/section-title"

const ToC = ({ headings }) => {
  const headerClasses = "block hover:text-black text-blue-800"
  const subHeaderClasses = "block text-xs pl-6 hover:text-black text-blue-800"

  const renderToc = headings => {
    let result = []
    headings.map(heading => {
      result.push(
        <div className="transition duration-300 ease-in-out transform hover:translate-x-2">
          <a href={heading.url} key={heading.url} className={headerClasses}>
            {heading.title}
          </a>
        </div>
      )
      if (heading.hasOwnProperty("items")) {
        heading.items.map(subHeading => {
          result.push(
            <div className="transition duration-300 ease-in-out transform hover:translate-x-2">
              <a
                href={subHeading.url}
                key={subHeading.url}
                className={subHeaderClasses}
              >
                {subHeading.title}
              </a>
            </div>
          )
        })
      }
    })
    return <div className="mt-5 leading-loose overflow-x-hidden">{result}</div>
  }

  return (
    <div>
      <SectionTitle>Table of Contents</SectionTitle>
      {renderToc(headings)}
    </div>
  )
}

export default ToC

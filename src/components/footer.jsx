import React from "react"

import heartIcon from "../../content/assets/heart.svg"
import codeIcon from "../../content/assets/icon-code.svg"
import gatsbyIcon from "../../content/assets/gatsby-icon.png"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-whitesmoke p-10">
      <div className="mobile:text-xxs sm:text-xs mb-4">
        <img className="inline m-0 w-4" src={codeIcon} alt="Code Icon" /> with <img className="inline m-0 mr-1 w-4" src={heartIcon} alt="Heart Icon" />
          by <span className="font-bold">Sercan Yektaş</span> and built with
          <a href="https://www.gatsbyjs.org/">
            <img className="inline m-0 ml-1 w-5" src={gatsbyIcon} alt="Gatsby Icon" />
          </a>
      </div>
      <div>
          <a className="mr-3" href="https://github.com/yektas">
            <svg class="fill-current sm:w-6 sm:h-6 mobile:w-5 mobile:h-5 text-gray-500 hover:text-black inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg>
          </a>
          <a className="mr-3" href="https://twitter.com/syektas">
            <svg className="fill-current sm:w-6 sm:h-6 mobile:w-5 mobile:h-5 text-gray-500 hover:text-blue-500 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Twitter</title><path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>
            </a>
          <a href="https://www.linkedin.com/in/sercanyektas/">
            <svg className="fill-current sm:w-6 sm:h-6 mobile:w-5 mobile:h-5 text-gray-500 hover:text-blue-600 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
      </div>
    </footer>
  )
}

export default Footer

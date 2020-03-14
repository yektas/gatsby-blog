import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex w-full mx-auto bg-white border-b border-gray-200 fixed top-0 h-16 z-20 items-center">
      <header className="w-full max-w-screen-xl relative mx-auto px-6 sm:py-3 sm:flex sm:justify-between sm:items-center">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <Link to="/">
            <img className="h-10 m-0" src="/logo-dark.png" alt="SercanY" />
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <img
                  src="close.svg"
                  alt="close"
                  className="h-5 w-5 fill-current"
                />
              ) : (
                <img
                  src="menu.svg"
                  alt="hamburger"
                  className="h-5 w-5 fill-current"
                />
              )}
            </button>
          </div>
        </div>
        <div
          className={
            isMenuOpen ? "block" : "hidden" + " px-2 pt-2 pb-4 sm:flex sm:p-0"
          }
        >
          <Link
            to="/"
            className="block px-2 font-semibold hover:text-radical-red "
          >
            Latest Posts
          </Link>
          <div className="flex">
            <button className="mt-1 block px-2 font-semibold hover:text-radical-red rounded sm:mt-0 sm:ml-2">
              <span>Tutorials</span>
            </button>
          </div>

          <Link
            to="/"
            className="mt-1 block px-2 font-semibold hover:text-radical-red rounded sm:mt-0 sm:ml-2"
          >
            Newsletter
          </Link>
        </div>
        <div className="sm:flex justify-between mr-10 ">
          <a className="px-5" href="https://github.com/yektas">
            {/* prettier-ignore */}
            <svg className="fill-current w-5 h-5 text-gray-600 hover:text-black" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Github</title>
            {/* prettier-ignore */}
              <path fill="currentColor" fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/Syektas">
            {/* prettier-ignore */}
            <svg class="fill-current w-5 h-5 text-gray-600 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Twitter</title>
            {/* prettier-ignore */}
            <path fill="currentColor" d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Navbar

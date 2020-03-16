import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkClasses = "lg:flex lg:items-center lg:w-auto w-full"

  return (
    <div className="w-full shadow fixed top-0 z-20">
      <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 max-w-screen-xl mx-auto">
        <div class="flex-1 flex justify-between items-center">
          <img className="h-10 m-0" src="/logo-dark.png" alt="SercanY" />
        </div>

        <div className="lg:hidden block py-6">
          <button
            type="button"
            className="focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <img
                src="menu.svg"
                alt="hamburger"
                className="h-5 w-5 mb-0 fill-current"
              />
            ) : (
              <img
                src="close.svg"
                alt="close"
                className="h-5 w-5 mb-0 fill-current"
              />
            )}
          </button>
        </div>

        <div class="lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <nav>
            <div className={isMenuOpen ? "hidden " + linkClasses : linkClasses}>
              <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li className="lg:p-4 py-3 px-0 block m-0">
                  <Link to="/">Latest Posts</Link>
                </li>
                <li className="lg:p-4 py-3 px-0 block m-0">
                  <Link to="/">Tutorials</Link>
                </li>
                <li className="lg:p-4 py-3 px-0 block m-0">
                  <Link to="/">Newsletter</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar

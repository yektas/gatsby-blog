import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkClasses = "lg:flex lg:items-center lg:w-auto w-full"

  return (
    <div className="w-full shadow-md top-0 z-20 bg-white">
      <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 max-w-screen-xl mx-auto">
        <div className="flex-1 flex justify-between items-center">
          <Link to="/">
            <img
              className="h-10 m-0"
              src="https://res.cloudinary.com/yektas/image/upload/v1584461901/Blog/static/logo/sylogo-dark.png"
              alt="SercanY"
            />
          </Link>
        </div>

        <div className="lg:hidden block py-6">
          <button
            type="button"
            className="focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ? (
              <img
                src="https://res.cloudinary.com/yektas/image/upload/v1584461962/Blog/static/hamburger-icon.svg"
                alt="hamburger"
                className="h-5 w-5 mb-0 fill-current"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/yektas/image/upload/v1584461962/Blog/static/close-icon.svg"
                alt="close"
                className="h-5 w-5 mb-0 fill-current"
              />
            )}
          </button>
        </div>

        <div className={!isMenuOpen ? "hidden " + linkClasses : linkClasses}>
          <nav>
            <div
              className={!isMenuOpen ? "hidden " + linkClasses : linkClasses}
            >
              <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li className="lg:p-4 py-3 px-0 block m-0">
                  <Link to="/">Latest Posts</Link>
                </li>
                <li className="lg:p-4 py-3 px-0 block m-0">
                  <Link to="/tags">Topics</Link>
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

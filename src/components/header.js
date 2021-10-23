import React from "react";
import { Link } from "gatsby";

const Header = ({ title }) => {
  return (
    <header class="text-gray-600 body-font bg-yellow-600">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link class="ml-3 text-xl" to="/">
              {title}
            </Link>
        </div>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div class="mr-5 hover:text-gray-900">
            <Link to="/">
              Home
            </Link>
          </div>
          <div class="mr-5 hover:text-gray-900">
            <Link to="/about">
              About
            </Link>
          </div>
          <div class="mr-5 hover:text-gray-900">
            <Link to="/contact">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
   )
}

export default Header
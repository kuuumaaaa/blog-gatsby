import React from "react";
import { Link } from "gatsby";

const Header = ({ title, prop }) => {
  return (
    //  <nav>
    //    <div class = "flex">
    //       <div class = "w-2/3">
    //         <Link to="/">
    //           <ul class="w-64 text-gray-700 text-center py-2 m-2">
    //           {title}
    //           </ul>
    //         </Link>
    //       </div>
    //       <div class = "w-1/3">
    //         <ul class="flex flex-row-reverse space-x-5 fixed">
    //           <Link to="/">
    //             <li class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    //               HOME
    //             </li>
    //             </Link>
    //             <Link to="/about">
    //             <li class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    //               ABOUT
    //             </li>
    //           </Link>
    //         </ul>
    //       </div>
    //    </div>
    //  </nav>
    <header class="text-gray-600 body-font bg-yellow-600">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"> */}
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          {/* </svg> */}
          <span class="ml-3 text-xl">{title}</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">
            <Link to="/">
                HOME
            </Link>
          </a>
          <a class="mr-5 hover:text-gray-900">
            <Link to="/about">
                  ABOUT
            </Link>
          </a>
          {/* <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
   );
}; 

export default Header;
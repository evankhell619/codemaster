import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/src/assets/nav.png" width="150px" alt="bookoe" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-purple-500 bg-white font-medium rounded-lg  px-4 py-2 text-center text-2xl border border-violet-500"
          >
            Edit List
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-gray-400 dark:hover:bg-gray- 700 dark:focus:ring-purple-500"
            aria-controls="navbar-cta"
            aria-expanded="false"
          ></button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-2xl text-black rounded hover:bg-purple-500 md:hover:bg-transparent md:hover:text-purple-500 md:dark:hover:text-purple-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-2xl text-black rounded hover:bg-purple-500 md:hover:bg-transparent md:hover:text-purple-500 md:dark:hover:text-purple-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Latest
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-2xl text-black rounded hover:bg-purple-500 md:hover:bg-transparent md:hover:text-purple-500 md:dark:hover:text-purple-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Top Pick
              </a>
            </li>
          </ul>
          {/* search  */}
          <div className="flex ml-10  ">
            <button
              type="button"
              className="md:hidden text-black  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search by title</span>
            </button>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  className=" stroke-slate-500"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 "
              placeholder="Search by title or author"
            />
          </div>
          {/* searh end */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

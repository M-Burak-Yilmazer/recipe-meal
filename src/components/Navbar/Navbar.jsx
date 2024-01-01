import React from "react";
import nav from "../../cooking.png";
import nav1 from "../../icons8-logout-64.png";

const Navbar = () => {
  return (
 
      <header className="bg-gradient-to-r from-rose-100 to-teal-100">
        <div className=" mx-auto  px-10 py-2 flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center gap-5 flex-shrink-0">
            <img className="h-10 md:h-12" src={nav} alt="" />
            <div className="flex flex-col ">
              <span className="text-red-600 text-xl font-semibold font-serif">
                Delicious
              </span>
              <span className="text-red-600 text-xl font-semibold font-serif">
                Food Recipes
              </span>
            </div>
          </div>
          {/* search */}

          {/* phone number */}

          {/* buttons */}
          <nav className="contents">
            <ul className=" flex items-center gap-2 justify-end">
              <li>
                <span className="font-semibold text-base">mburakyilmazer</span>
              </li>
              <li className="   inline-block">
                <a className="" href="#">
                  <svg
                    className="h-9 lg:h-10 p-2 text-gray-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="user"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                    />
                  </svg>
                </a>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <img className="h-10 md:h-12" src={nav1} alt="" />
                <span className="font-semibold text-base">Logout</span>
              </li>
            </ul>
          </nav>
          {/* cart count */}
        </div>
        <hr />
      </header>
 
  );
};

export default Navbar;

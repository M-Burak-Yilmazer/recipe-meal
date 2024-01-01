import React, { useContext } from "react";
import nav from "../../cooking.png";
import nav1 from "../../icons8-logout-64.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import avatar from "../../avatar.png";

const Navbar = () => {
  const { logOut, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <header className="bg-gradient-to-r from-rose-100 to-teal-100">
      <div className=" mx-auto  px-10 py-2 flex justify-between items-center">
        {/* logo */}
        <div
          className="flex cursor-pointer items-center gap-5 flex-shrink-0"
          onClick={() => navigate("/dashboard")}
        >
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
              {currentUser && (
                <span className="font-semibold text-base">
                  {currentUser?.displayName}
                </span>
              )}
            </li>
            <li className="   inline-block">
              <img
                className="h-8 w-8 rounded-full"
                src={currentUser?.photoURL || avatar}
                alt=""
              />
            </li>
            <li
              className="flex flex-row gap-2 items-center cursor-pointer"
              onClick={() => {
                logOut();
                navigate("/");
              }}
            >
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

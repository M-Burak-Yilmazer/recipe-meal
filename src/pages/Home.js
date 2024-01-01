import React, { useState } from "react";

const Home = () => {
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search, select);
  };

  return (
    <form onSubmit={handleSubmit} className="container w-[50%] mx-auto mt-5 ">
      <div className="flex">
        <label
          htmlFor="location-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>

        <div className=" w-full flex gap-2">
          <select
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Brunch">Brunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Teatime">Teatime</option>
          </select>
          <input
            type="search"
            id='location-search"'
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg   border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search for city or address"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required=""
          />

          <button
            type="submit"
            className=" w-[100px] flex items-center gap-2 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Home;

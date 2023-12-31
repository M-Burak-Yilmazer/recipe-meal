import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import SearchDetail from "../components/SearchDetail";
import "./Home.css";

const Home = () => {
  const inputRef = useRef();
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    getRecipe();
  };
  console.log(inputRef);

  const apiKey = "2e43178cb3e20d2b429690dfb240ec95";
  const applicationId = "59b63c92";

  const getRecipe = async () => {
    try {
      const response = await axios(
        `https://api.edamam.com/search?q=${search}&app_id=${applicationId}&app_key=${apiKey}&mealType=${select}`
      );
      setData(response.data.hits);
      console.log(select);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecipe();
  }, []);
  console.log(data);

  return (
    <div
      className={
        data.length > 1
          ? "bg-gradient-to-r from-rose-400 to-orange-300 h-min-[100vh] "
          : "home"
      }
    >
      <form onSubmit={handleSubmit} className="container w-[95%] md:w-[50%] mx-auto pt-5 ">
        <div className="flex">
          <label
            htmlFor="location-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>

          <div className=" w-full  md:outline outline-4   outline-offset-[7px] rounded outline-orange-600   flex gap-2">
            <select
              value={select}
              ref={inputRef}
              onChange={(e) => setSelect(e.target.value)}
              id="countries"
              className="bg-orange-600  text-white  font-semibold text-sm rounded-lg focus:bg-orange-500 focus:border-orange-500  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-600 dark:focus:border-orange-600 "
            >
              <option disabled value="">
             Meal/Type
              </option>
              <option value="Breakfast">Breakfast</option>
              <option selected value="Lunch">
                Lunch
              </option>
              <option value="Brunch">Brunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Teatime">Teatime</option>
            </select>
            <input
              type="search"
              id='location-search"'
              className="block p-2.5 w-full z-20 text-sm text-orange-600 placeholder-orange-600  bg-gray-50 rounded-lg   border border-gray-300 focus:ring-orange-600   dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search a meal for cooking..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required=""
            />

            <button
              type="submit"
              className=" w-[100px] flex items-center gap-2 h-full p-2.5 text-sm font-medium text-white bg-orange-600 rounded-lg   hover:bg-orange-500  focus:ring-4 focus:outline-none focus:ring-orange-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
      <div
        class=" p-5 flex flex-wrap  gap-4 
      justify-center items-start
      "
      >
        {data.length > 1 &&
          data.map((item) => (
            <SearchDetail key={item.recipe.calories} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Home;

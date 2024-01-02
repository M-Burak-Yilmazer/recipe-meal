import React from "react";
import { useNavigate } from "react-router-dom";

const SearchDetail = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer rounded overflow-hidden w-[300px] h-[450px] shadow-lg flex flex-col bg-orange-200">
      <div
        className="relative"
        onClick={() => navigate("/dashboard/recipe", { state: { from: item } })}
      >
        <img
          className="w-full "
          src={item.recipe.image}
          alt="Sunset in the mountains"
        />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

        <div className="text-xs capitalize absolute rounded-lg top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out font-semibold">
          {item.recipe.cuisineType}
        </div>
      </div>
      <div className="px-6 py-4 font-semibold mb-auto flex flex-col">
        <span>{item.recipe.label}</span>
      </div>
      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span
          href="#"
          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
        >
          <span className="ml-1">Source : {item.recipe.source}</span>
        </span>
        <span
          href="#"
          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
        >
          <svg
            className="h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            ></path>
          </svg>
          <span className="ml-1">{item.recipe.totalTime} Comments</span>
        </span>
      </div>
    </div>
  );
};

export default SearchDetail;

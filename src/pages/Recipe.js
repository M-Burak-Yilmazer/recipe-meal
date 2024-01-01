import React from "react";
import "./recipe.css";
import { Link, useLocation } from "react-router-dom";

const Recipe = () => {
  const location = useLocation();
  const recipe = location.state.from.recipe;
  console.log(recipe);
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 recipe rounded-lg ">
      <div className="recipeDiv w-[50vw] rounded-lg  mx-auto ">
        <h1 className="text-2xl md:text-4xl font-semibold capitalize px-3 mb-3">
          {recipe.label}
        </h1>
        <div className="w-[80%] flex gap-2">
          <img
            className=" w-[50%]   mt-3 rounded-lg"
            src={recipe.image}
            alt=""
          />

          <div className="flex-1 flex  justify-around items-center text-center">
            <div className="flex flex-col">
              <span className="text-2xl text-red-400 underline">
                Prep Time:
              </span>{" "}
              <span>40 min</span>
            </div>
            <div className="flex flex-col  ">
              <span className=" text-2xl text-red-400 underline">
                Cooking Time:{" "}
              </span>
              <span>{recipe.totalTime} min.</span>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="mt-3 mb-2 text-red-500 text-xl font-semibold ">
            Ingredients
          </h1>
          <ul className="list-disc list-inside text-sm ">
            {recipe.ingredients.map((item) => (
              <li>{item.text}</li>
            ))}
          </ul>
        </div>

        <a
          href={recipe.url}
          target="_blank"
          rel="noreferrer"
          className="button bg-orange-600 w-[200px] px-5 py-2 mt-3 mb-3 text-white font-semibold rounded-lg  text-center hover:bg-orange-500 "
        >
          To See Full Recipe
        </a>
        <Link
          to={-1}
          className="text-orange-600  border-2 hover:border-none font-semibold border-orange-600 px-5 w-[200px] py-2 hover:text-white hover:bg-orange-500 rounded-lg  transition  text-center duration-300 ease-in-out mb-4" 
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Recipe;

import React from "react";
import "./recipe.css";
import { useLocation } from "react-router-dom";

const Recipe = () => {
  const location = useLocation();
  const recipe = location.state.from.recipe
  console.log(recipe)
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 recipe">
      <div className="recipeDiv w-[90vw] md:w-[50wv]  mx-auto h-screen">
        <h1 className="text-2xl md:text-4xl font-semibold capitalize">{recipe.label}</h1>
        
      </div>
    </div>
  );
};

export default Recipe;

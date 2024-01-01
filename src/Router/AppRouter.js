import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";

import Register from "../pages/Register/Register";
import { Login } from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Welcome />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
          <Route path="recipe" element={<Recipe />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;

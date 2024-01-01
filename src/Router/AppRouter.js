import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";
import Register from "../pages/Register/Register";
import { Login } from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import ScrollToTop from "../components/ScroolToTop";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
          <Route path="recipe" element={<Recipe />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;

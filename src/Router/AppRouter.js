import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";

import Register from "../pages/Login/Register";
import { Login } from "../pages/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRouter;

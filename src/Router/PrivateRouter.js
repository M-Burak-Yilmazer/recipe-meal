import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../context/AuthProvider";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? (
    <div>
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Welcome />
  );
};

export default PrivateRouter;

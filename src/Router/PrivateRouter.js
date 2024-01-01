import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";
import Navbar from "../components/Navbar/Navbar";

const PrivateRouter = () => {
  const [state, setState] = useState(true);
  return state ? (
    <div>
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Welcome />
  );
};

export default PrivateRouter;

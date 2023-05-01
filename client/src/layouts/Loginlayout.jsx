import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

const Loginlayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Loginlayout;

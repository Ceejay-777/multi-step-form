import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import mobileBG from "../../assets/images/bg-sidebar-mobile.svg";

const SharedLayout = () => {
  return (
    <div className="relative">
      <div className="bg-lightBlue min-h-screen w-screen absolute">
        <div>
          <img
            src="../../assets/images/bg-sidebar-mobile.svg"
            alt="Sidebar image"
            className="w-full"
          />
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div className="bg-white w-">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;

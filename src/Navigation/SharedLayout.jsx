import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

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
        <div className="flex justify-center mb-5">
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;

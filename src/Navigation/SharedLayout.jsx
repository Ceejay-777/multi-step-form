import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const SharedLayout = () => {
  return (
    <div className="relative h-full">
      <div className="bg-magnolia min-h-screen w-screen absolute h-full">
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
        <div className="min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;

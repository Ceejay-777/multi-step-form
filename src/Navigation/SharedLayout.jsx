import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const SharedLayout = () => {
  return (
    <div>
      <div className="bg-[url('../../assets/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat h-[172px]">
        <div className="flex justify-center mb-5">
          <Navbar />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;

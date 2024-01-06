import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const SharedLayout = () => {
  return (
    <div className="max-w-[1024px] md:flex md:bg-white md:p-4 md:gap-12 md:rounded-lg md:justify-center md:items-center md:pr-16">
      <div className="bg-[url('../../assets/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat h-[172px] md:bg-[url('../../assets/images/bg-sidebar-desktop.svg')] md:flex-grow md:h-[568px] md:rounded-md md:min-w-[274px] md:items-start md:justify-start">
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

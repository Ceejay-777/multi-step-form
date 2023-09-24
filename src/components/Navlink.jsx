import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({ children, props }) => {
  return (
    <NavLink className="w-8 h-8 rounded-full border-2 text-center border-lightBlue block">
      {children}
    </NavLink>
  );
};

export default Navlink;

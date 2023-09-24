import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({ children, props }) => {
  return <div className="w-8 bg-red-200 p-4">{children}</div>;
};

export default Navlink;

import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({ children, props }) => {
  return <NavLink className="w-8 bg-slate-200">{children}</NavLink>;
};

export default Navlink;

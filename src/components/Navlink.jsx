import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({ children, ...props }) => {
  return (
    <NavLink
      className="w-8 h-8 rounded-full border-2 text-center border-lightBlue block"
      to={children == 1 ? "/" : props.location}
    >
      {children}
    </NavLink>
  );
};

export default Navlink;

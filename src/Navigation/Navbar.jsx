import React from "react";
import { navlinks } from "../data";
import { useLocation } from "react-router-dom";
// import Navlink from "../components/Navlink";\

const Navbar = () => {
  const currentLoacation = useLocation();
  return (
    <nav>
      {navlinks.map((navlink, index) => {
        const current = currentLoacation[-1] === navlink;
        return <div className="">{navlink}</div>;
      })}
    </nav>
  );
};

export default Navbar;

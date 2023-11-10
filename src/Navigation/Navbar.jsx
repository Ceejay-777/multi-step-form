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
        return (
          <div
            className={`width-4 rounded-full border-orange-800 border-2 p-2`}
          >
            {navlink}
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;

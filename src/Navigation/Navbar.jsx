import React from "react";
import { navlinks } from "../data";
import Navlink from "../components/Navlink";

const Navbar = () => {
  return (
    <nav>
      {navlinks.map((navlink) => {
        return <Navlink>{navlink}</Navlink>;
      })}
    </nav>
  );
};

export default Navbar;

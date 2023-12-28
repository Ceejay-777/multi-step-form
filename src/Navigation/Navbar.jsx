import React from "react";
import { navlinks } from "../data";
import { useLocation } from "react-router-dom";
// import Navlink from "../components/Navlink";\

const Navbar = () => {
  const currentLocation = useLocation();
  return (
    <nav>
      {navlinks.map((navlink, index) => {
        const current = currentLocation.pathname;
        const currentLength = current.length;
        let lastChar = current.charAt(currentLength - 1);
        if (lastChar === "/") {
          lastChar = "1";
        }
        // console.log(lastChar);
        return (
          <div
            key={index}
            className={`w-8 h-8 border-pastelBlue border-2 text-center my-4  rounded-full ${
              lastChar == navlink ? "bg-pastelBlue" : "bg-none"
              // currentStyle
            }`}
          >
            <p
              className={`font-bold  ${
                lastChar == navlink ? "text-marineBlue" : "text-pastelBlue"
              } `}
            >
              {navlink}
            </p>
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;

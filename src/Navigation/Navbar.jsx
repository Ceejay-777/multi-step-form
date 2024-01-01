import React from "react";
import { navlinks } from "../data";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const currentLocation = useLocation();
  return (
    <nav className="flex gap-4">
      {navlinks.map((navlink, index) => {
        const current = currentLocation.pathname;
        const currentLength = current.length;
        let lastChar = current.charAt(currentLength - 1);

        if (lastChar === "/") {
          lastChar = "1";
        }

        return (
          <div
            key={index}
            className={`w-8 h-8 border-pastelBlue text-center my-4  rounded-full ${
              lastChar == navlink ? "bg-pastelBlue" : "bg-none"
            } border-2 mt-10`}
          >
            <p
              className={`font-bold ${
                lastChar == navlink ? "text-marineBlue" : "text-white"
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

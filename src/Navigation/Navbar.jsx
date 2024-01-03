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

        if (lastChar === "5") {
          lastChar = "4";
        }

        return (
          <div
            key={index}
            className={`w-8 h-8 border-pastelBlue my-4 rounded-full ${
              lastChar == navlink ? "bg-pastelBlue" : "bg-none"
            } border-[1px] mt-10 flex items-center justify-center`}
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

import React from "react";
import { navlinks } from "../data";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const currentLocation = useLocation();
  return (
    <nav className="flex gap-4 md:flex-col md:p-8 md:w-full">
      {navlinks.map((navlink, index) => {
        const [link, message] = navlink;
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
          <div className="flex gap-4 justify-center items-center" key={index}>
            <div
              className={`w-8 h-8 border-pastelBlue my-4 rounded-full ${
                lastChar == link ? "bg-pastelBlue" : "bg-none"
              } border-[1px] mt-10 flex items-center justify-center md:mt-4 md:w-10`}
            >
              <p
                className={`font-bold ${
                  lastChar == link ? "text-marineBlue" : "text-white"
                } `}
              >
                {link}
              </p>
            </div>
            <div className="w-full hidden md:block">
              <p className="uppercase text-sm text-coolGray font-light">
                Step {link}
              </p>
              <p className="uppercase font-bold text-sm text-alabaster tracking-wide">
                {message}
              </p>
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;

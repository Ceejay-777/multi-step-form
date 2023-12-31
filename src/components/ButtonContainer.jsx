import React from "react";

const ButtonContainer = ({ children }) => {
  return (
    <div className="w-full bg-white fixed bottom-0 border-t-[1px] border-coolGray md:relative md:bottom-auto md:border-none md:w-11/12 md:mx-auto">
      {children}
    </div>
  );
};

export default ButtonContainer;

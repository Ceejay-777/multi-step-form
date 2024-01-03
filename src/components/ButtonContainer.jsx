import React from "react";

const ButtonContainer = ({ children }) => {
  return (
    <div className="w-full bg-white fixed bottom-0 border-t-[1px] border-coolGray">
      {children}
    </div>
  );
};

export default ButtonContainer;

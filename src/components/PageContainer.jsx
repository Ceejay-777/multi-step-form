import React from "react";

const PageContainer = ({ children }) => {
  return (
    <div className="bg-white w-11/12 mx-auto rounded-lg p-7 border-2 translate-y-[-60px] mb-[60px]">
      {children}
    </div>
  );
};

export default PageContainer;

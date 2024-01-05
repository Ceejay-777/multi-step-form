import React from "react";

const PageContainer = ({ children }) => {
  return (
    <div className="bg-white w-11/12 mx-auto rounded-lg p-7 translate-y-[-60px] mb-[60px] md:translate-y-0 md:w-full">
      {children}
    </div>
  );
};

export default PageContainer;

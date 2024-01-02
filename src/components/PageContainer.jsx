import React from "react";

const PageContainer = ({ children }) => {
  return (
    <div className="bg-white w-11/12 mx-auto rounded-lg p-5">{children}</div>
  );
};

const ButtonsContainer = ({ children }) => {
  return <div className="w-full bg-white">{children}</div>;
};

export default PageContainer;

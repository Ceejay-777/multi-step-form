import React from "react";

const LocationBar = () => {
  return (
    <div>
      <EachLocation>1</EachLocation>
    </div>
  );
};

const EachLocation = ({ children }) => {
  return <div>{children}</div>;
};

export default LocationBar;

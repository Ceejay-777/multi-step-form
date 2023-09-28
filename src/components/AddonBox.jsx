import React from "react";

const AddonBox = ({ children, ...props }) => {
  const { addon, perk, price } = props;
  return (
    <div>
      {children}
      <h2>{addon}</h2>
      <p>{perk}</p>
      <p>{price}</p>
    </div>
  );
};

export default AddonBox;

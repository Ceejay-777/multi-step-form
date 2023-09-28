import React from "react";

const PlanBox = ({ image, plan, price, promo }) => {
  return (
    <div className="border-2 my-4">
      <img src={image} />
      <div>
        <h2>{plan}</h2>
        <p>{price}</p>
        <p>{promo}</p>
      </div>
    </div>
  );
};

export default PlanBox;

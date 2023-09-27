import React from "react";

const PlanBox = ({ image, plan, price, promo, isMonthly }) => {
  return (
    <div>
      <img src={image} />
      <div>
        <h2>{plan}</h2>
        <p>{price}</p>
        {!isMonthly && <p>{promo}</p>}
      </div>
    </div>
  );
};

export default PlanBox;

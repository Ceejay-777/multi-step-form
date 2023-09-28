import React, { useEffect, useState } from "react";
import PeriodSwitch from "../components/PeriodSwitch";
import PlanBox from "../components/PlanBox";
import { usePeriodContext } from "../context/periodContext";
import { monthlyPlan, yearlyPlan } from "../data";

const Page2 = ({ page2Vals, setPage2Vals }) => {
  const [currentPlan, setCurrentPlan] = useState(null);
  const [monthly] = usePeriodContext();
  const planToUse = monthly ? monthlyPlan : yearlyPlan;

  useEffect(() => {
    console.log(currentPlan);
  }, [currentPlan]);

  return (
    <div>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>

      {planToUse.map((plans, ID) => {
        const { image, plan, price, promo } = plans;
        return (
          <div onClick={() => setCurrentPlan(plan)}>
            <PlanBox
              image={image}
              plan={plan}
              price={price}
              promo={promo}
              key={ID}
            />
          </div>
        );
      })}
      <PeriodSwitch />
    </div>
  );
};

export default Page2;

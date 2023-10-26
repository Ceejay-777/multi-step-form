import React, { useEffect, useState } from "react";
import PeriodSwitch from "../components/PeriodSwitch";
import { usePeriodContext } from "../context/periodContext";
import { monthlyPlan, yearlyPlan } from "../data";
import { useNavigate } from "react-router-dom";

const Page2 = ({ page2Vals, setPage2Vals }) => {
  const navigate = useNavigate();
  const [currentPlan, setCurrentPlan] = useState(page2Vals);
  const [error, setError] = useState(false);
  const [monthly] = usePeriodContext();
  const planToUse = monthly ? monthlyPlan : yearlyPlan;

  const handleSubmit = () => {
    if (!currentPlan) {
      setError(true);
      return;
    }
    console.log("okay");
    setPage2Vals(currentPlan);
    navigate("/page3");
  };

  useEffect(() => {
    console.log(currentPlan);
  }, [currentPlan]);

  return (
    <div>
      {error && <div className="bg-red-600">Error</div>}
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>

      {planToUse.map((plans, ID) => {
        const { image, plan, price, promo } = plans;
        return (
          <div
            key={ID}
            onClick={() => {
              setCurrentPlan({ plan, price });
              setError(false);
            }}
          >
            <div className="border-2 my-4">
              <img src={image} />
              <div>
                <h2>{plan}</h2>
                <p>{price}</p>
                <p>{promo}</p>
              </div>
            </div>
          </div>
        );
      })}
      <PeriodSwitch />
      <div className="flex justify-between px-4 my-2">
        <button
          type="button"
          className="p-1 border-2"
          onClick={() => {
            navigate("/");
          }}
        >
          Go back
        </button>
        <button type="button" className="p-1 border-2" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Page2;

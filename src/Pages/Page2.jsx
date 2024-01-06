import React, { useEffect, useState } from "react";
import PeriodSwitch from "../components/PeriodSwitch";
import { usePeriodContext } from "../context/periodContext";
import { monthlyPlan, yearlyPlan } from "../data";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import ButtonContainer from "../components/ButtonContainer";

const Page2 = ({ page2Vals, setPage2Vals }) => {
  const navigate = useNavigate();
  const [currentPlan, setCurrentPlan] = useState(page2Vals);
  const [error, setError] = useState(false);
  const [monthly] = usePeriodContext();
  const planToUse = monthly ? monthlyPlan : yearlyPlan;

  useEffect(() => {
    setCurrentPlan(page2Vals);
  }, [monthly]);

  const handleSubmit = () => {
    if (!currentPlan.plan) {
      setError(true);
      return;
    }
    setPage2Vals(currentPlan);
    navigate("/page3");
  };

  return (
    <div>
      <PageContainer>
        <h1 className="header-text mb-4">Select your plan</h1>
        <p className="text-coolGray mb-4">
          You have the option of monthly or yearly billing.
        </p>
        {error && (
          <div className="text-strawberryRed text-lg">
            Please select a plan.
          </div>
        )}

        <div className="md:flex gap-4 md:h-[160px] md:mb-8">
          {planToUse.map((plans, ID) => {
            const { image, plan, price, promo } = plans;
            const currentStyle = "border-purpleBlue bg-alabaster";
            return (
              <div
                key={ID}
                onClick={() => {
                  setCurrentPlan({ plan, price });
                  setError(false);
                }}
              >
                <div
                  className={`border-[1px] my-3 ${
                    currentPlan.plan === plan ? currentStyle : null
                  } flex gap-4 p-4 rounded-lg md:flex-col md:w-[120px] md:h-full md:justify-between hover:border-purpleBlue hover:cursor-pointer`}
                >
                  <img src={image} className="md:max-w-[40px]" />
                  <div>
                    <h2 className="font-bold text-marineBlue">{plan}</h2>
                    <p className="text-coolGray font-semibold text-sm">
                      ${price}/{monthly ? "mo" : "yr"}
                    </p>
                    <p className="text-marineBlue text-xs font-semibold">
                      {promo}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <PeriodSwitch />
      </PageContainer>
      <ButtonContainer>
        <div className="flex justify-between px-4">
          <button
            type="button"
            className="text-coolGray font-semibold"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </button>
          <button type="button" className="next-button" onClick={handleSubmit}>
            Next Step
          </button>
        </div>
      </ButtonContainer>
    </div>
  );
};

export default Page2;

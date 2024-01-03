import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import ButtonContainer from "../components/ButtonContainer";
import { usePeriodContext } from "../context/periodContext";

const Page4 = ({ page2Vals, page3Vals }) => {
  const navigate = useNavigate();
  const [total, setTotal] = useState();
  const [monthly] = usePeriodContext();

  useEffect(() => {
    let runningTotal = 0;
    if (page3Vals) {
      page3Vals.forEach((addon) => {
        const splited = addon.split(",");
        const currentNum = parseInt(splited[1]);
        runningTotal += currentNum;
      });
    }
    runningTotal += parseInt(page2Vals.price);
    setTotal(runningTotal);
  }, [page2Vals, page3Vals]);

  return (
    <div>
      <PageContainer>
        <h1 className="header-text">Finishing up</h1>
        <p className="text-coolGray mb-2">
          Double-check everything looks OK before confirming
        </p>

        <div className="rounded-lg bg-alabaster p-4 text-sm my-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-semibold text-marineBlue">
                {page2Vals.plan} ({`${monthly ? "Monthly" : "Yearly"}`})
              </p>
              <button
                type="button"
                onClick={() => navigate("/Page2")}
                className="underline text-coolGray font-semibold"
              >
                Change
              </button>
            </div>
            <p className="text-marineBlue font-semibold">
              ${page2Vals.price}/{`${monthly ? "mo" : "yr"}`}
            </p>
          </div>

          <hr />

          {page3Vals ? (
            page3Vals.map((addons) => {
              const [addon, price] = addons.split(",");
              return (
                <div key={addons} className="flex justify-between mt-4">
                  <p className="text-coolGray">{addon}</p>
                  <p className="text-marineBlue">
                    +${price}/{`${monthly ? "mo" : "yr"}`}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="mt-4 text-coolGray font-semibold">
              No addons selected
            </p>
          )}
        </div>
        <div className="flex justify-between px-4">
          <p className="text-sm text-coolGray">
            Total (per {`${monthly ? "month" : "year"}`})
          </p>
          <p className="font-semibold text-purpleBlue">
            +${total}/{`${monthly ? "mo" : "yr"}`}
          </p>
        </div>
      </PageContainer>
      <ButtonContainer>
        <div className="flex justify-between px-4">
          <button
            onClick={() => {
              navigate("/Page3");
            }}
            className="text-coolGray font-semibold"
          >
            Go Back
          </button>
          <button
            onClick={() => {
              navigate("/Page5");
            }}
            className="next-button confirm "
          >
            Confirm
          </button>
        </div>
      </ButtonContainer>
    </div>
  );
};

export default Page4;

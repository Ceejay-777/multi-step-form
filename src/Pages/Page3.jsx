import React, { useEffect, useState } from "react";
import { addons } from "../data";
import { usePeriodContext } from "../context/periodContext";
import check from "../../assets/images/icon-checkmark.svg";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import ButtonContainer from "../components/ButtonContainer";

const Page3 = ({ page3Vals, setPage3Vals }) => {
  const navigate = useNavigate();
  const [monthly, setMonthly] = usePeriodContext();
  const [selection, setSelection] = useState(page3Vals);

  useEffect(() => {
    if (selection) {
      if (selection.length == 0) {
        setSelection(null);
      }
    }
  }, [selection]);

  const handleSubmit = () => {
    navigate("/Page4");
    setPage3Vals(selection);
  };

  const handleSelection = (event) => {
    const name = event.currentTarget.attributes.datavals.value;

    if (!selection) {
      setSelection([name]);
    } else {
      if (selection.includes(name)) {
        let newSelection = selection.filter((select) => select != name);
        setSelection(newSelection);
      } else {
        let newSelection = [...selection, name];
        setSelection(newSelection);
      }
    }
  };

  return (
    <div>
      <PageContainer>
        <h1 className="header-text">Pick add-ons</h1>
        <p className="text-coolGray">
          Add-ons help enhance your gaming experience.
        </p>
        <div>
          {addons.map((singleAddon, index) => {
            const { addon, perk, monthlyPrice, yearlyPrice } = singleAddon;
            const currentPrice = monthly ? monthlyPrice : yearlyPrice;
            const combined = addon + "," + currentPrice;
            const clickedThis =
              selection !== null && selection.includes(combined);
            return (
              <div
                className={`p-4 border-[1px] my-2 flex items-center rounded-lg justify-between ${
                  clickedThis
                    ? "border-purpleBlue bg-alabaster"
                    : "border-lightGray"
                }`}
                onClick={handleSelection}
                key={index}
                datavals={[addon, currentPrice]}
              >
                <div
                  className={`${
                    clickedThis ? "bg-purpleBlue border-none" : "bg-transparent"
                  } p-1 w-3 h-3 box-content rounded-md border-[1px] flex-grow-0`}
                >
                  <img src={check} className="w-full" />
                </div>
                <div className="flex justify-between w-full items-center">
                  <div className="ml-4">
                    <h2 className="text-marineBlue font-semibold text-sm">
                      {addon}
                    </h2>
                    <p className="text-xs text-coolGray">{perk}</p>
                  </div>
                  <p className="text-purpleBlue text-xs font-semibold">
                    +{monthly ? `$${monthlyPrice}/mo` : `$${yearlyPrice}/yr`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
      <ButtonContainer>
        <div className="flex justify-between px-4">
          <button
            type="button"
            className="text-coolGray font-semibold"
            onClick={() => {
              navigate("/Page2");
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

export default Page3;

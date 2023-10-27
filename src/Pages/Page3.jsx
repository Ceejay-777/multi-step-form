import React, { useEffect, useState } from "react";
import { addons } from "../data";
import { usePeriodContext } from "../context/periodContext";
import check from "../../assets/images/icon-checkmark.svg";
import { useNavigate } from "react-router-dom";

const Page3 = ({ page3Vals, setPage3Vals }) => {
  const navigate = useNavigate();
  const [monthly, setMonthly] = usePeriodContext();
  const [selection, setSelection] = useState(page3Vals);
  // const [error, setError] = useState(false);

  useEffect(() => {
    if (selection) {
      console.log(selection);
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
      {/* {error && <p className="bg-red-600">Error</p>} */}
      <div>
        {addons.map((singleAddon, index) => {
          const { addon, perk, monthlyPrice, yearlyPrice } = singleAddon;
          const currentPrice = monthly ? monthlyPrice : yearlyPrice;
          return (
            <div
              className="p-4 border-2 my-2"
              onClick={handleSelection}
              key={index}
              datavals={[addon, currentPrice]}
            >
              <div className="bg-purpleBlue p-1 border-2 w-4 aspect-square box-content">
                <img src={check} className="w-full" />
              </div>
              <h2>{addon}</h2>
              <p>{perk}</p>
              <p>{monthly ? `$${monthlyPrice}/mo` : `$${yearlyPrice}/yr`}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between px-4 my-2">
        <button
          type="button"
          className="p-1 border-2"
          onClick={() => {
            navigate("/Page2");
          }}
        >
          Go back
        </button>
        <button type="button" className="p-1 border-2" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
      {/* <PeriodSwitch /> */}
    </div>
  );
};

export default Page3;

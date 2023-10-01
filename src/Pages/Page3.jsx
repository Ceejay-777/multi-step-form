import React, { useEffect, useState } from "react";
import AddonBox from "../components/AddonBox";
import { addons } from "../data";
import { usePeriodContext } from "../context/periodContext";
import PeriodSwitch from "../components/PeriodSwitch";
import check from "../../assets/images/icon-checkmark.svg";

const Page3 = ({ page3Vals, setPage3Vals }) => {
  const [monthly, setMonthly] = usePeriodContext();
  const [selection, setSelecton] = useState([]);

  // useEffect(() => {
  //   console.log(["okay", "me"].join(""));
  // }, []);
  const handleSelection = (event) => {
    console.log(event.currentTarget.classList[0]);
    // if (!event.target.clicked) {
    // }
  };
  return (
    <form>
      {addons.map((singleAddon, index) => {
        const { addon, perk, monthlyPrice, yearlyPrice } = singleAddon;
        return (
          <div
            className={`${addon.split(" ").join("")} `}
            onClick={handleSelection}
            key={index}
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
      <button type="submit">Okay</button>
      <PeriodSwitch />
    </form>
  );
};

export default Page3;

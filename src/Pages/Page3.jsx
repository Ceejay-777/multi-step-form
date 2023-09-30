import React, { useEffect, useState } from "react";
import AddonBox from "../components/AddonBox";
import { addons } from "../data";
import { usePeriodContext } from "../context/periodContext";
import PeriodSwitch from "../components/PeriodSwitch";
import check from "../../assets/images/icon-checkmark.svg";

const Page3 = ({ page3Vals, setPage3Vals }) => {
  const [monthly, setMonthly] = usePeriodContext();
  const [selection, setSelecton] = useState([]);

  // useEffect(())
  const handleSelection = (event) => {
    console.log(event.target.clicked);
    // if (!event.target.clicked) {
    // }
  };
  return (
    <form>
      {addons.map((singleAddon) => {
        const { addon, perk, monthlyPrice, yearlyPrice } = singleAddon;
        return (
          <AddonBox
            addon={addon}
            perk={perk}
            price={monthly ? `$${monthlyPrice}/mo` : `$${yearlyPrice}/yr`}
          >
            <div className="bg-purpleBlue p-1 border-2 w-4 aspect-square box-content">
              <img src={check} className="w-full" />
            </div>
          </AddonBox>
        );
      })}
      <button type="submit">Okay</button>
      <PeriodSwitch />
    </form>
  );
};

export default Page3;

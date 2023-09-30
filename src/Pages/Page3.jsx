import React from "react";
import AddonBox from "../components/AddonBox";
import { addons } from "../data";
import { usePeriodContext } from "../context/periodContext";
import PeriodSwitch from "../components/PeriodSwitch";

const Page3 = ({ page3Vals, setPage3Vals }) => {
  const [monthly, setMonthly] = usePeriodContext();

  use;

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
            <input type="checkbox" name="addon" id={addon} />
          </AddonBox>
        );
      })}
      <PeriodSwitch />
    </form>
  );
};

export default Page3;

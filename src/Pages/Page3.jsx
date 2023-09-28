import React from "react";
import AddonBox from "../components/AddonBox";
import { addons } from "../data";
import { usePeriodContext } from "../context/periodContext";

const Page3 = () => {
  const [monthly, setMonthly] = usePeriodContext();

  return (
    <form>
      {addons.map((singleAddon) => {
        const { addon, perk, monthlyPrice, yearlyPrice } = singleAddon;
        return (
          <AddonBox
            addon={addon}
            perk={perk}
            price={monthly ? monthlyPrice : yearlyPrice}
          ></AddonBox>
        );
      })}
    </form>
  );
};

export default Page3;

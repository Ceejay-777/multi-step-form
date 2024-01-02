import React, { useEffect, useState } from "react";
import { usePeriodContext } from "../context/periodContext";

const PeriodSwitch = () => {
  const [monthly, setMonthly] = usePeriodContext();

  const translation = monthly ? "left-0" : "left-6";

  return (
    <div className="flex gap-6 w-full py-4 rounded-lg bg-alabaster justify-center">
      <div>Monthly</div>
      <div>
        <div
          className="w-12 h-6 rounded-full flex align-middle p-1 bg-marineBlue"
          onClick={() => {
            setMonthly(!monthly);
          }}
        >
          <div
            className={`w-4 h-4 bg-alabaster rounded-full relative ${translation}`}
          ></div>
        </div>
      </div>
      <div>Yearly</div>
    </div>
  );
};
export default PeriodSwitch;

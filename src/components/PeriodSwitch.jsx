import React, { useEffect, useState } from "react";
import { usePeriodContext } from "../context/periodContext";

const PeriodSwitch = () => {
  const [period, setPeriod] = usePeriodContext();

  const translation = period ? "left-0" : "left-6";

  return (
    <div className="flex gap-6 w-full py-4 border-2 rounded-sm bg-coolGray justify-center">
      <div>Monthly</div>
      <div>
        <div
          className="w-12 h-6 rounded-full flex align-middle p-1 bg-marineBlue"
          onClick={() => {
            setPeriod(!period);
          }}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full relative ${translation}`}
          ></div>
        </div>
      </div>
      <div>Yearly</div>
    </div>
  );
};
export default PeriodSwitch;

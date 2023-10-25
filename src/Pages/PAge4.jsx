import React from "react";
import { usePeriodContext } from "../context/periodContext";

const Page4 = ({ page2Vals, page3Vals }) => {
  const [period] = usePeriodContext();
  return (
    <div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming</p>
      <div>
        <p>{page2Vals}</p>
      </div>
    </div>
  );
};

export default Page4;

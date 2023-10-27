import React from "react";
import { usePeriodContext } from "../context/periodContext";
import { useNavigate } from "react-router-dom";

const Page4 = ({ page2Vals, page3Vals }) => {
  const navigate = useNavigate();
  console.log(page3Vals);
  const [period] = usePeriodContext();
  return (
    <div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming</p>
      <div>
        <p>{page2Vals.plan}</p>
        <button type="button" onClick={() => navigate("/Page2")}>
          change
        </button>
        <p>{page2Vals.price}</p>

        {page3Vals
          ? page3Vals.map((addon) => {
              const splitAddons = addon.split(",");
              return (
                <div key={addon}>
                  <div>{splitAddons[0]}</div>
                  <div>{splitAddons[1]}</div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Page4;

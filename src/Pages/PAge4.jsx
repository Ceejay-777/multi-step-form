import React, { useEffect, useState } from "react";
import { usePeriodContext } from "../context/periodContext";
import { useNavigate } from "react-router-dom";

const Page4 = ({ page2Vals, page3Vals }) => {
  const navigate = useNavigate();
  // console.log(page3Vals);
  const [period] = usePeriodContext();
  const [total, setTotal] = useState();

  useEffect(() => {
    let runningTotal = 0;
    if (page3Vals) {
      page3Vals.forEach((addon) => {
        const splited = addon.split(",");
        const currentNum = parseInt(splited[1]);
        console.log(currentNum);
        runningTotal += currentNum;
        console.log(runningTotal);
      });
    }
    // setTotal(total + parseInt(page2Vals.price));
    runningTotal += parseInt(page2Vals.price);
    setTotal(runningTotal);

    console.log(total);
  }, [page2Vals, page3Vals]);

  return (
    <div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming</p>

      <br />
      <hr />
      <br />

      <div>
        <p>{page2Vals.plan}</p>
        <button type="button" onClick={() => navigate("/Page2")}>
          change
        </button>
        <p>{page2Vals.price}</p>

        <br />
        <hr />
        <br />

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

        <br />
        <hr />
        <br />

        <p>{total}</p>
      </div>
    </div>
  );
};

export default Page4;

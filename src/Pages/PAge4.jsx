import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import ButtonContainer from "../components/ButtonContainer";

const Page4 = ({ page2Vals, page3Vals }) => {
  const navigate = useNavigate();
  const [total, setTotal] = useState();

  useEffect(() => {
    let runningTotal = 0;
    if (page3Vals) {
      page3Vals.forEach((addon) => {
        const splited = addon.split(",");
        const currentNum = parseInt(splited[1]);
        runningTotal += currentNum;
      });
    }
    runningTotal += parseInt(page2Vals.price);
    setTotal(runningTotal);
  }, [page2Vals, page3Vals]);

  return (
    <div>
      <PageContainer>
        <h1 className="header-text">Finishing up</h1>
        <p className="text-coolGray">
          Double-check everything looks OK before confirming
        </p>

        <div className="rounded-sm bg-alabaster p-3">
          <p>{page2Vals.plan}</p>
          <button type="button" onClick={() => navigate("/Page2")}>
            change
          </button>
          <p>{page2Vals.price}</p>

          <br />
          <hr />
          <br />

          {page3Vals ? (
            page3Vals.map((addon) => {
              const splitAddons = addon.split(",");
              return (
                <div key={addon}>
                  <div>{splitAddons[0]}</div>
                  <div>{splitAddons[1]}</div>
                </div>
              );
            })
          ) : (
            <p>No addons selected</p>
          )}

          <br />
          <hr />
          <br />
        </div>
        <p>{total}</p>
      </PageContainer>
      <ButtonContainer>
        <div className="flex justify-between px-4 my-2">
          <button
            onClick={() => {
              navigate("/Page3");
            }}
            className="text-coolGray font-semibold"
          >
            Go Back
          </button>
          <button
            onClick={() => {
              navigate("/Page5");
            }}
            className="next-button confirm "
          >
            Confirm
          </button>
        </div>
      </ButtonContainer>
    </div>
  );
};

export default Page4;

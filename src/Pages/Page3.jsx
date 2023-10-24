import React, { useEffect, useState } from "react";
import AddonBox from "../components/AddonBox";
import { addons } from "../data";
import { usePeriodContext } from "../context/periodContext";
import PeriodSwitch from "../components/PeriodSwitch";
import check from "../../assets/images/icon-checkmark.svg";

const Page3 = ({ page3Vals, setPage3Vals }) => {
  const [monthly, setMonthly] = usePeriodContext();
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    // console.log(["okay", "me"].join(""));
    // console.log(typeof setSelection);
    console.log(selection);
  }, [selection]);

  const handleSelection = (event) => {
    const name = event.currentTarget.attributes.datavals.value;

    if (!selection) {
      setSelection([name]);

      // selection.push(name);
    } else {
      if (selection.includes(name)) {
        // let index = selection.indexOf(name);
        let newSelection = selection.filter((select) => {
          select != name;
        });
        setSelection(selection.splice(index, 1));
      } else {
        let newSelection = [...selection, name];
        setSelection(newSelection);
      }

      // setSelection((selection) => {
      //
      //   return ;
      // });
    }

    // console.log(selection);
  };

  return (
    <form>
      {addons.map((singleAddon, index) => {
        const { addon, perk, monthlyPrice, yearlyPrice } = singleAddon;
        return (
          <div
            className="py-4"
            onClick={handleSelection}
            key={index}
            datavals={addon}
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

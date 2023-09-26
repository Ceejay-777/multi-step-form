import React, { useEffect, useState } from "react";
import PeriodSwitch from "../components/PeriodSwitch";

const Page1 = ({ page1Vals, setPage1Vals }) => {
  const [namefield, setNamefield] = useState({
    value: "",
    isError: false,
    errorMessage: "",
  });
  const [emailfield, setEmailfield] = useState({
    value: "",
    isError: false,
    errorMessage: "",
  });
  const [phonefield, setPhonefield] = useState({
    value: "",
    isError: false,
    errorMessage: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    if (event.target.name === "name") {
      setNamefield({ ...namefield, value: event.target.value });
    } else if (event.target.name === "email") {
      setEmailfield({ ...emailfield, value: event.target.value });
    } else if (event.target.name === "phone") {
      setPhonefield({ ...phonefield, value: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!namefield) {
      setNamefield({
        ...namefield,
        isError: true,
        errorMessage: "This field is required",
      });
    }
    if (!emailfield) {
      setEmailfield({
        ...emailfield,
        isError: true,
        errorMessage: "This field is required",
      });
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailfield.value)
    ) {
      setEmailfield({
        ...emailfield,
        isError: true,
        errorMessage: "Invalid email",
      });
    }
    if (!phonefield) {
      setPhonefield({
        ...phonefield,
        isError: true,
        errorMessage: "This field is required",
      });
    }
  };

  // const handleBlur = () => {
  //   setPage1Vals({
  //     name: {
  //       nameVal: namefield.value,
  //       nameError: namefield.errorMessage,
  //     },
  //     email: {
  //       emailVal: emailfield.value,
  //       emailError: emailfield.errorMessage,
  //     },
  //     phone: {
  //       phoneVal: phonefield.value,
  //       phoneError: phonefield.errorMessage,
  //     },
  //   });
  //   console.log(page1Vals);
  // };

  return (
    <div>
      <h1>Personal info</h1>
      <p>Please provide your name, email address and phone number</p>

      <>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g Stephen King"
            className="w-full border-2"
            value={namefield.value}
            onChange={handleInputChange}
            // onBlur={handleBlur}
          />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className="w-full border-2"
            value={emailfield.value}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="name">Phone Number</label>
          <br />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            className="w-full border-2"
            value={phonefield.value}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Next Step</button>
      </div>
    </form>
  );
};

export default Page1;

import React, { useEffect, useState } from "react";
import PeriodSwitch from "../components/PeriodSwitch";

const Page1 = ({ page1Vals, setPage1Vals }) => {
  const [submitted, setSubmitted] = useState(false);
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

  const validateName = () => {
    if (submitted) {
      if (!namefield.value) {
        setNamefield({
          ...namefield,
          isError: true,
          errorMessage: "This field is required",
        });
      } else {
        setNamefield({
          ...namefield,
          isError: false,
          errorMessage: "This field is required",
        });
      }
    }
  };

  const validateEmail = () => {
    if (submitted) {
      if (!emailfield.value) {
        setEmailfield({
          ...emailfield,
          isError: true,
          errorMessage: "This field is required",
        });
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          emailfield.value
        )
      ) {
        setEmailfield({
          ...emailfield,
          isError: true,
          errorMessage: "Invalid Email",
        });
      } else {
        setEmailfield({
          ...emailfield,
          isError: false,
          errorMessage: "",
        });
      }
    }
  };

  const validatePhone = () => {
    if (submitted) {
      if (!phonefield.value) {
        setPhonefield({
          ...phonefield,
          isError: true,
          errorMessage: "This field is required",
        });
      } else {
        setPhonefield({
          ...phonefield,
          isError: true,
          errorMessage: "",
        });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validateName();
    validateEmail();
    validatePhone();

    if (!namefield.isError && !emailfield.isError && !phonefield.isError) {
      setPage1Vals({
        nameVal: namefield.value,
        emailVal: emailfield.value,
        phoneVal: phonefield.value,
      });
    }
  };

  return (
    <div>
      <h1>Personal info</h1>
      <p>Please provide your name, email address and phone number</p>

      <form onSubmit={handleSubmit} noValidate>
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
            onBlur={validateName}
          />
          <br />
          {namefield.isError && <p>{namefield.errorMessage}</p>}
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
            onBlur={validateEmail}
          />
          <br />
          {emailfield.isError && <p>{emailfield.errorMessage}</p>}
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
            onBlur={validatePhone}
          />
          <br />
          {phonefield.isError && <p>{phonefield.errorMessage}</p>}
        </div>

        <button type="submit" onClick={() => setSubmitted(true)}>
          Next Step
        </button>
      </form>
    </div>
  );
};

export default Page1;

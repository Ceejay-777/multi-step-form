import React, { useEffect, useState } from "react";
import PeriodSwitch from "../components/PeriodSwitch";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Page1 = ({ page1Vals, setPage1Vals }) => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const currentLocation = useLocation();
  const [formTouched, setFormTouched] = useState(false);

  const [namefield, setNamefield] = useState({
    value: page1Vals.nameVal,
    isError: false,
    errorMessage: "",
  });
  const [emailfield, setEmailfield] = useState({
    value: page1Vals.emailVal,
    isError: false,
    errorMessage: "",
  });
  const [phonefield, setPhonefield] = useState({
    value: page1Vals.phoneVal,
    isError: false,
    errorMessage: "",
  });
  // const [fieldErrors, setFieldErrors] = useState({
  //   nameError: false,
  //   emailError: false,
  //   phoneError: false,
  // });

  useEffect(() => {
    //   namefield.value = page1Vals.nameVal;
    //   emailfield.value = page1Vals.emailVal;
    //   phonefield.value = page1Vals.phoneVal;
    // const hasErrors =
    //   Object.values(namefield).some((attribute) => attribute) ||
    //   Object.values(emailfield).some((attribute) => attribute) ||
    //   Object.values(phonefield).some((attribute) => attribute);
    // const hasErrors = setFormValid(!hasErrors);
    if (namefield.value || emailfield.value || phonefield.value) {
      setFormTouched(true);
    }
  }, [currentLocation]);

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
        errorMessage: "",
      });
    }
  };

  const validateEmail = () => {
    if (!emailfield.value) {
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
        errorMessage: "Invalid Email",
      });
    } else {
      setEmailfield({
        ...emailfield,
        isError: false,
        errorMessage: "",
      });
    }
  };

  const validatePhone = () => {
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    validateName();
    validateEmail();
    validatePhone();

    if (
      formTouched &&
      (!namefield.isError || !emailfield.isError || !phonefield.isError)
    ) {
      // setFormValid(true);
      console.log("submitted");
      // console.log(namefield.isError, emailfield.isError, phonefield.isError);

      setPage1Vals({
        nameVal: namefield.value,
        emailVal: emailfield.value,
        phoneVal: phonefield.value,
      });

      navigate("/page2");
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
            onBlur={() => {
              if (submitted) {
                validateName();
              }
            }}
            onClick={() => setFormTouched(true)}
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
            onBlur={() => {
              if (submitted) {
                validateEmail();
              }
            }}
            onClick={() => setFormTouched(true)}
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
            onBlur={() => {
              if (submitted) {
                validatePhone();
              }
            }}
            onClick={() => setFormTouched(true)}
          />
          <br />
          {phonefield.isError && <p>{phonefield.errorMessage}</p>}
        </div>

        <button
          type="submit"
          className="p-1 border-2"
          // onClick={() => setSubmitted(true)}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Page1;

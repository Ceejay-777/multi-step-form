import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import ButtonContainer from "../components/ButtonContainer";

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

  useEffect(() => {
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
      <PageContainer className="bg-white w-11/12 mx-auto rounded-lg p-5">
        <h1 className="header-text">Personal info</h1>
        <p className="text-coolGray mb-4">
          Please provide your name, email address and phone number.
        </p>
        <form noValidate>
          <div>
            <div className="flex justify-between mb-1">
              <label htmlFor="name">Name</label>
              {namefield.isError && (
                <p className="font-semibold text-strawberryRed text-sm">
                  {namefield.errorMessage}
                </p>
              )}
            </div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g Stephen King"
              className={`w-full border-[1px] p-2 rounded-md mb-2 hover:border-purpleBlue hover:cursor-pointer ${
                namefield.isError && "border-strawberryRed"
              }`}
              value={namefield.value}
              onChange={handleInputChange}
              onBlur={() => {
                if (submitted) {
                  validateName();
                }
              }}
              onClick={() => setFormTouched(true)}
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label htmlFor="email">Email Address</label>
              {emailfield.isError && (
                <p className="font-semibold text-strawberryRed text-sm ">
                  {emailfield.errorMessage}
                </p>
              )}
            </div>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              className={`w-full border-[1px] p-2 rounded-md mb-2 hover:border-purpleBlue hover:cursor-pointer ${
                emailfield.isError && "border-strawberryRed"
              }`}
              value={emailfield.value}
              onChange={handleInputChange}
              onBlur={() => {
                if (submitted) {
                  validateEmail();
                }
              }}
              onClick={() => setFormTouched(true)}
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label htmlFor="name">Phone Number</label>
              {phonefield.isError && (
                <p className="font-semibold text-strawberryRed text-sm">
                  {phonefield.errorMessage}
                </p>
              )}
            </div>

            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              className={`w-full border-[1px] p-2 rounded-md mb-2 hover:border-purpleBlue hover:cursor-pointer active:border-purpleBlue ${
                phonefield.isError && "border-strawberryRed"
              }`}
              value={phonefield.value}
              onChange={handleInputChange}
              onBlur={() => {
                if (submitted) {
                  validatePhone();
                }
              }}
              onClick={() => setFormTouched(true)}
            />
          </div>
        </form>
      </PageContainer>

      <ButtonContainer>
        <div className="w-full flex justify-between px-4">
          <div></div>
          <button className="next-button" onClick={handleSubmit}>
            Next Step
          </button>
        </div>
      </ButtonContainer>
    </div>
  );
};

export default Page1;

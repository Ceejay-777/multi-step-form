import React, { useState } from "react";
import PeriodSwitch from "../components/PeriodSwitch";

const Page1 = () => {
  const [namefield, setNamefield] = useState({ value: "", isError: false });
  const [emailfield, setEmailfield] = useState({ value: "", isError: false });
  const [phonefield, setPhonefield] = useState({ value: "", isError: false });

  const handleInputChange = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h1>Personal info</h1>
      <p>Please provide your name, email address and phone number</p>

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
        />
      </div>
    </div>
  );
};

export default Page1;

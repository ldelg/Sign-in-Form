import React, { useState } from "react";
import "./Form.css";
import Input from "../Input/Input";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [formInputs, setFormData] = useState([
    {
      value: "",
      label: "First Name",
      placeholder: "Enter Your First Name",
      type: "text",
      half: true,
    },
    {
      value: "",
      label: "Surname",
      placeholder: "Enter your Surname",
      type: "text",
      half: true,
    },
    {
      value: "",
      label: "E-Mail Address",
      placeholder: "Example: Your-email@Yahoo.com",
      type: "email",
      half: false,
    },
    {
      value: "",
      label: "Password",
      placeholder: "Insert Your Password",
      type: "password",
      half: false,
      min: 8,
      max: 20,
    },
    {
      value: "",
      label: "Confirm Password",
      placeholder: "Confirm Your Password",
      type: "password",
      half: false,
      min: 8,
      max: 20,
    },
    {
      label: " I accept the Terms of Use & Privacy Policy.",
      type: "checkbox",
      half: false,
      isCheckBox: true,
    },
  ]);

  const renderInputs = (inputs) =>
    inputs.map((input) => <Input data={input} key={uuidv4()} />);

  const halfInputs = formInputs.filter((input) => input.half);
  const normalInputs = formInputs.filter((input) => !input.half);

  return (
    <>
      <form className="form">
        <h3 className="title">Registration Form</h3>
        <div className="half-container">{renderInputs(halfInputs)}</div>
        {renderInputs(normalInputs)}
        <button className="submit-button">Submit Form</button>
      </form>
    </>
  );
};

export default Form;

import React, { useState } from "react";
import "./Input.css";
import OpenEye from "../../icons/openeye.PNG";
import ClosedEye from "../../icons/closedeye.PNG";

const Input = ({ data }) => {
  const { value, label, placeholder, type, isCheckBox, min, max } = data;

  const [showPassword, setShowPassword] = useState(false);

  const PasswordToggleHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className={isCheckBox ? "checkbox-wrapper" : "input-wrapper"}>
        <label>{label}</label>
        <div>
          <input
            required
            defaultValue={value}
            placeholder={placeholder}
            type={showPassword ? "text" : type}
            min={min}
            max={max}
            className={!isCheckBox ? "input" : "checkbox"}
          />
          {type === "password" && (
            <span className="password-toggle" onClick={PasswordToggleHandler}>
              <img
                src={showPassword ? ClosedEye : OpenEye}
                alt="password view toggler"
                className="toggle-icon"
              />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;

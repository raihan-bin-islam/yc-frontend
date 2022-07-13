import React from "react";

import styles from "./button.module.scss";

const ButtonLight = ({ text, dark, onClick, type, disabled }) => {
  const { btnLight, btnDark, btnDisabled } = styles;
  return (
    <button
      type={type}
      className={`${dark ? btnDark : btnLight} btn ${disabled && btnDisabled}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonLight;

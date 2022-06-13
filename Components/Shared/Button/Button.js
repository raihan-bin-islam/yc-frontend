import React from "react";

import styles from "./button.module.scss";

const ButtonLight = ({ text, dark, onClick, type, disabled }) => {
  const { btnLight, btnDark } = styles;
  return (
    <button
      type={type}
      className={`${dark ? btnDark : btnLight} btn`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonLight;

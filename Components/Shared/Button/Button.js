import React from "react";

import styles from "./button.module.scss";

const ButtonLight = ({ text, dark, onClick }) => {
  const { btnLight, btnDark } = styles;
  return (
    <button className={`${dark ? btnDark : btnLight} btn`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonLight;

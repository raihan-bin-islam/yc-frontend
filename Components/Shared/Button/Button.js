import React from "react";

import styles from "./button.module.scss";

const ButtonLight = ({ text, dark }) => {
  const { btnLight, btnDark } = styles;
  return <button className={`${dark ? btnDark : btnLight} btn`}>{text}</button>;
};

export default ButtonLight;

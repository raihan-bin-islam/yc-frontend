import React from "react";

import styles from "./buttonLight.module.scss";

const ButtonLight = ({ text }) => {
  const { btnLight } = styles;
  return <button className={btnLight}>{text}</button>;
};

export default ButtonLight;

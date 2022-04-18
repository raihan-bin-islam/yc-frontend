import React from "react";
import style from "./heading.module.scss";
const Heading = ({ text, size = "regular" }) => {
  const { heading } = style;
  return size == "small" ? (
    <h4 className={heading}>{text}</h4>
  ) : size == "regular" ? (
    <h3 className={heading}>{text}</h3>
  ) : (
    <h2 className={heading}>{text}</h2>
  );
};

export default Heading;

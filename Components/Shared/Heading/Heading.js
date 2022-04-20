import React from "react";
import style from "./heading.module.scss";
const Heading = ({ text, size = "regular" }) => {
  const { heading, small, regular, large } = style;
  return <h2 className={`${heading} ${size === "small" ? small : size === "regular" ? regular : large}`}>{text}</h2>;
};

export default Heading;

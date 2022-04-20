import React from "react";
import style from "./heading.module.scss";
const Heading = ({ text, size = "regular", white = false }) => {
  const { heading, small, regular, large, textWhite } = style;
  return (
    <h2
      className={`${heading} ${size === "small" ? small : size === "regular" ? regular : large} ${white && textWhite}`}
    >
      {text}
    </h2>
  );
};

export default Heading;

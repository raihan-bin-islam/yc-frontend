import React from "react";
import style from "./heading.module.scss";
const Heading = ({ text, size = "regular", white = false, center = false }) => {
  const { heading, small, regular, large, alignCenter, textWhite } = style;
  return (
    <h2
      className={`${heading} ${center && alignCenter} ${
        size === "small" ? small : size === "regular" ? regular : large
      } ${white && textWhite}`}
    >
      {text}
    </h2>
  );
};

export default Heading;

import React from "react";

// CSS
import styles from "./principleCard.module.scss";

const PrincipleCard = ({ number, text, textBold }) => {
  const { principleCard, numberContainer, bold } = styles;
  return (
    <div className={principleCard}>
      <div className={numberContainer}>
        <h1>{number}</h1>
      </div>
      <p className={textBold ? bold : ""}>{text}</p>
    </div>
  );
};

export default PrincipleCard;

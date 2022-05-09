import React from "react";

// CSS
import styles from "./principleCard.module.scss";

const PrincipleCard = ({ number, text }) => {
  const { principleCard, numberContainer } = styles;
  return (
    <div className={principleCard}>
      <div className={numberContainer}>
        <h1>{number}</h1>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default PrincipleCard;

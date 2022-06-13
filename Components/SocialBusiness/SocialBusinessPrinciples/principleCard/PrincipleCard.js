import React from "react";
import useScrollReveal from "../../../Hooks/useScrollReveal";

// CSS
import styles from "./principleCard.module.scss";

const PrincipleCard = ({ number, text, textBold, left, right }) => {
  const { principleCard, numberContainer, bold } = styles;

  const { revealFromLeft, revealFromRight, revealFromBottom } = useScrollReveal("sb__principles");

  return (
    <div className={`${principleCard} ${left ? revealFromLeft : right ? revealFromRight : revealFromBottom}`}>
      <div className={numberContainer}>
        <h1>{number}</h1>
      </div>
      <p className={textBold ? bold : ""}>{text}</p>
    </div>
  );
};

export default PrincipleCard;

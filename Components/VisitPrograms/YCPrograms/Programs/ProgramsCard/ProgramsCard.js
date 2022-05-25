import React from "react";
// import styles
import { cardContainer, cardImage, cardTitle } from "./programsCard.module.scss";
const ProgramsCard = ({ title, image }) => {
  return (
    <div className={`${cardContainer} grid-item`}>
      <img className={cardImage} src={image} alt="" />
      <h2 className={cardTitle}>{title}</h2>
    </div>
  );
};

export default ProgramsCard;

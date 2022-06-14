/* eslint-disable @next/next/no-img-element */
import React from "react";
// import styles
import { cardContainer, cardImage, cardTitle } from "./programsCard.module.scss";
const ProgramsCard = ({ sectionId, title, image }) => {
  return (
    <div className={`${cardContainer} grid-item`} id={sectionId}>
      <img className={cardImage} src={image} alt="" />
      <h2 className={cardTitle}>{title}</h2>
    </div>
  );
};

export default ProgramsCard;

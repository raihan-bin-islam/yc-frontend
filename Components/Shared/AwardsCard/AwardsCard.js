import React from "react";
import styles from "./award_card.module.scss";
const AwardsCard = ({ className, image, title, year }) => {
  const { awardCardContainer, titleContainer, cardTitle, cardImg, yearStyles } = styles;
  const baseImagePath = "assets/images/prof_yunus/awards/";
  return (
    <div className={`${awardCardContainer} ${className}`}>
      <img className={cardImg} src={baseImagePath + image} alt="" />
      <div className={titleContainer}>
        <h4 className={cardTitle}>{title}</h4>
        <h4 className={yearStyles}>{year}</h4>
      </div>
    </div>
  );
};

export default AwardsCard;

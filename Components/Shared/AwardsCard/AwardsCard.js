/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./award_card.module.scss";

const AwardsCard = ({ className, image, title, year, motion }) => {
  const { awardCardContainer, titleContainer, cardTitle, cardImg, yearStyles } = styles;
  const baseImagePath = "assets/images/prof_yunus/awards/";
  console.log(motion);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <div className={`${awardCardContainer} ${className}`}>
        <img className={cardImg} src={baseImagePath + image} alt="" />
        <div className={titleContainer}>
          <h4 className={cardTitle}>{title}</h4>
          <h4 className={yearStyles}>{year}</h4>
        </div>
      </div>
    </>
  );
};

export default AwardsCard;

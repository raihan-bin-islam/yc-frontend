/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./award_card.module.scss";
import { animated, useSpring } from "@react-spring/web";

const AwardsCard = ({ className, image, title, year, i }) => {
  const { awardCardContainer, titleContainer, cardTitle, cardImg, yearStyles } = styles;

  const animationStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: i * 500,
    config: { duration: 1000 },
  });

  return (
    <>
      <animated.div style={animationStyle} className={`${awardCardContainer} ${className}`}>
        <img className={cardImg} src={image} alt={title} />
        <div className={titleContainer}>
          <h4 className={cardTitle}>{title}</h4>
          <h4 className={yearStyles}>{year}</h4>
        </div>
      </animated.div>
    </>
  );
};

export default AwardsCard;

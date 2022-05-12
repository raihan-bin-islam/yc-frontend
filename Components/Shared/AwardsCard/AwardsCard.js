/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./award_card.module.scss";
import { animated, useSpring } from "@react-spring/web";

const AwardsCard = ({ className, image, title, year }) => {
  const { awardCardContainer, titleContainer, cardTitle, cardImg, yearStyles } = styles;
  const baseImagePath = "assets/images/prof_yunus/awards/";

  const springStyle = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: {
      duration: 2000
    }
  })

  return (
    <animated.div style={springStyle}>
      <div className={`${awardCardContainer} ${className}`}>
        <img className={cardImg} src={baseImagePath + image} alt="" />
        <div className={titleContainer}>
          <h4 className={cardTitle}>{title}</h4>
          <h4 className={yearStyles}>{year}</h4>
        </div>
      </div>
    </animated.div>
  );
};

export default AwardsCard;

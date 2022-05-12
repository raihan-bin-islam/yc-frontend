/* eslint-disable @next/next/no-img-element */
import React from "react";
// import styles from "./award_card.module.scss";
import { animated, useSpring } from "@react-spring/web";

const AwardsCard = ({ className, image, title, year, motion }) => {
  // const { awardCardContainer, titleContainer, cardTitle, cardImg, yearStyles } = styles;
  const baseImagePath = "assets/images/prof_yunus/awards/";

  const animationStyle = useSpring({ reset: true, from: { x: 0 }, to: { x: 24 }, delay: 100 });
  console.log(animationStyle);

  return (
    <>
      <animated.div style={animationStyle}>
        <img src={baseImagePath + image} alt="" />
        <div>
          <h4>{title}</h4>
          <h4>{year}</h4>
        </div>
      </animated.div>
      {/* <animated.div style={animationStyle} className={`${awardCardContainer} ${className}`}>
        <img className={cardImg} src={baseImagePath + image} alt="" />
        <div className={titleContainer}>
          <h4 className={cardTitle}>{title}</h4>
          <h4 className={yearStyles}>{year}</h4>
        </div>
      </animated.div> */}
    </>
  );
};

export default AwardsCard;

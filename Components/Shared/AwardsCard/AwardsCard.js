/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./award_card.module.scss";
import { animated, useSpring } from "@react-spring/web";

const AwardsCard = ({ className, image, title, year, i, animate = false, style }) => {
  const { awardCardContainer, titleContainer, cardTitle, cardImg, yearStyles } = styles;
  const baseImagePath = "assets/images/prof_yunus/awards/";
  const [animation, setAnimation] = useState(animate);
  useEffect(() => {
    setAnimation(true);
  }, []);

  const animationStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: i * 200,
    config: { duration: 1000 },
  });
  return (
    <>
      <animated.div style={style} className={`${awardCardContainer} ${className}`}>
        <img className={cardImg} src={baseImagePath + image} alt="" />
        <div className={titleContainer}>
          <h4 className={cardTitle}>{title}</h4>
          <h4 className={yearStyles}>{year}</h4>
        </div>
      </animated.div>
    </>
  );
};

export default AwardsCard;

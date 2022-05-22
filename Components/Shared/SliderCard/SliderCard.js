/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import LikeButton from "../CommonSvg/LikeButton";
import PlayButton from "../CommonSvg/PlayButton";
import RightArrowLink from "../CommonSvg/RightArrowLink";
import { sliderData } from "./data";

// Import Component Styles
import styles from "./slider_card.module.scss";

const SliderCard = ({ image, title, type = "events", size = 1, onClick, link, activeClass }) => {
  const [cardActivation, setCardActivation] = useState(false);
  // Destructuring Module Style Object
  const {
    eventsContainer,
    articlesContainer,
    videoContainer,
    awardCardContainer,
    cardImg,
    articleImg,
    buttons,
    playBtn,
    cardTitle,
    active,
    inactive,
  } = styles;

  const activate = () => {
    const classId = document.getElementsByClassName(active);
    // console.log();
    // classId[0].classList.remove(active);
    setCardActivation(true);
  };
  // // Destructuring the Slider Data
  // const { image, title } = sliderData;

  return (
    <div
      className={`${
        type === "events"
          ? eventsContainer // container name based on types, each of these applies type specific styles
          : type === "articles"
          ? articlesContainer
          : type === "video"
          ? videoContainer
          : awardCardContainer
      } cardSelector ${cardActivation ? active : inactive}`}
      onClick={() => {
        onClick && onClick();
        activate();
      }}
    >
      <img className={`${type === "articles" ? articleImg : cardImg}`} src={image} alt={title} />
      <h4 className={cardTitle}>{title}</h4>

      {/* We will use this same slider component for different section based on types */}
      {/* If the type is articles then we add two extra buttons, like and read more */}
      {type === "articles" && (
        <span className={buttons}>
          <LikeButton />
          <RightArrowLink link={link} />
        </span>
      )}

      {/* If the type of the component is video then we add a play button */}
      {type === "video" && <PlayButton className={playBtn} />}
    </div>
  );
};

export default SliderCard;

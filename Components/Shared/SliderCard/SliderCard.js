/* eslint-disable @next/next/no-img-element */
import React from "react";
import LikeButton from "../CommonSvg/LikeButton";
import PlayButton from "../CommonSvg/PlayButton";
import RightArrowLink from "../CommonSvg/RightArrowLink";
import { sliderData } from "./data";

// Import Component Styles
import styles from "./slider_card.module.scss";

const SliderCard = ({ image, title, type = "events", size = 1, onClick }) => {
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
  } = styles;
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
      } cardSelector`}
      onClick={() => onClick && onClick()}
    >
      <img className={`${type === "articles" ? articleImg : cardImg}`} src={image} alt={title} />
      <h4 className={cardTitle}>{title}</h4>

      {/* We will use this same slider component for different section based on types */}
      {/* If the type is articles then we add two extra buttons, like and read more */}
      {type === "articles" && (
        <span className={buttons}>
          <LikeButton />
          <RightArrowLink />
        </span>
      )}

      {/* If the type of the component is video then we add a play button */}
      {type === "video" && <PlayButton className={playBtn} />}
    </div>
  );
};

export default SliderCard;

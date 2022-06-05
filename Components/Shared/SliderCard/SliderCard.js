/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from "react";

// SVG Components
import LikeButton from "../CommonSvg/LikeButton";
import PlayButton from "../CommonSvg/PlayButton";
import RightArrowLink from "../CommonSvg/RightArrowLink";

// Data
import { sliderData } from "./data";

// Import Component Styles
import styles from "./slider_card.module.scss";

// utility function
import { toggleActive } from "../../Utils/helpers";

const SliderCard = ({ image, title, type = "events", size = 1, onClick, link, activeClass }) => {
  const [cardActivation, setCardActivation] = useState(false);
  const cardRef = useRef(null);
  // Destructuring Module Style Object
  const {
    eventsContainer,
    articlesContainer,
    videoContainer,
    awardCardContainer,
    magazineContainer,
    cardImg,
    articleImg,
    buttons,
    playBtn,
    cardTitle,
    active,
    inactive,
  } = styles;

  return (
    <div
      ref={cardRef}
      id={type}
      className={`${
        type === "events"
          ? eventsContainer // container name based on types, each of these applies type specific styles
          : type === "articles"
          ? articlesContainer
          : type === "video"
          ? videoContainer
          : type === "magazine"
          ? magazineContainer
          : awardCardContainer
      } cardSelector`}
      onClick={() => {
        onClick && onClick();
        toggleActive("#video", cardRef, active);
      }}
    >
      <img className={`${type === "articles" ? articleImg : cardImg} slider-arrow`} src={image} alt={title} />
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

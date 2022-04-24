import React from "react";
import LikeButton from "../CommonSvg/LikeButton";
import RightArrowLink from "../CommonSvg/RightArrowLink";
import { sliderData } from "./data";

// Import Component Styles
import styles from "./slider_card.module.scss";

const SliderCard = ({ image, title, type = "events", size = 1 }) => {
  // Destructuring Module Style Object
  const { eventsContainer, articlesContainer, cardImg, articleImg, buttons, cardTitle } = styles;
  // // Destructuring the Slider Data
  // const { image, title } = sliderData;

  return (
    <div className={`${type === "events" ? eventsContainer : articlesContainer} cardSelector`}>
      <img className={`${type === "events" ? cardImg : articleImg}`} src={image} alt={title} />
      <h4 className={cardTitle}>{title}</h4>

      {/* We will use this same slider component for articles section based on types */}
      {type === "articles" && (
        <span className={buttons}>
          <LikeButton />
          <RightArrowLink />
        </span>
      )}
    </div>
  );
};

export default SliderCard;

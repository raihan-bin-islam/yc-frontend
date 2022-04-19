import Image from "next/image";
import React from "react";
import { sliderData } from "./data";
import styles from "./slider_card.module.scss";

const SliderCard = () => {
  const { sliderContainer, cardImg, cardTitle } = styles;
  const { image, title } = sliderData;

  return (
    <div className={sliderContainer}>
      <Image className={cardImg} src={image} alt={title} width={394} height={394} />
      <h4 className={cardTitle}>{title}</h4>
    </div>
  );
};

export default SliderCard;

import React from "react";

// CSS
import styles from "./PhotoCard.module.scss";

const PhotoCard = ({ image, title }) => {
  const { photoCard, imageContainer, mask } = styles;

  return (
    <div className={photoCard}>
      <div className={imageContainer}>
        <img src={image} alt="gallery-image" />
      </div>
      <div className={mask}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PhotoCard;

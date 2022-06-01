import React from "react";

// COMPONENTS
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

// IMAGES
import heroImage from "../../../public/assets/images/media/media-videos/img-1.png";

// CSS
import styles from "./MediaVideosHeader.module.scss";

const MediaVideosHeader = () => {
  const { headerHero, heroBody, imageContainer, mask } = styles;

  return (
    <div className={headerHero}>
      <HeroBanner large />
      <div className={heroBody}>
        <div className={imageContainer}>
          <div className={mask}>
            <span>Professor Muhammad Yunus:</span>
            <span>The power of Social Business</span>
          </div>
          <img src={heroImage.src} alt="hero-banner" />
        </div>
      </div>
    </div>
  );
};

export default MediaVideosHeader;

import React from "react";

// COMPONETS
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

// IMAGES
import heroImage from "/public/assets/images/ysbc/image-1.png";

// CSS
import styles from "./YsbcHeader.module.scss";

const YsbcHeader = () => {
  const { headerHero, heroBody, imageContainer, mask } = styles;

  console.log(heroImage);

  return (
    <div className={headerHero}>
      <HeroBanner large />
      <div className={heroBody}>
        <div className={imageContainer}>
          <div className={mask}>
            <h1>YSBC</h1>
            <span>Yunus Social Business Centre</span>
          </div>
          <img src={heroImage.src} alt="hero-banner" />
        </div>
      </div>
    </div>
  );
};

export default YsbcHeader;

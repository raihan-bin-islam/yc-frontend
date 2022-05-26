import React from "react";

// COMPONENTS
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

// IMAGES
import heroImage from "../../../public/assets/images/social_business/events_image-1.png";

// CSS
import styles from "./SocialBusinessEventsHeader.module.scss";

const SocialBusinessEventsHeader = () => {
  const { headerHero, heroBody, imageContainer, mask } = styles;

  return (
    <div className={headerHero}>
      <HeroBanner large />
      <div className={heroBody}>
        <div className={imageContainer}>
          <img src={heroImage.src} alt="hero-banner" />
        </div>
      </div>
    </div>
  );
};

export default SocialBusinessEventsHeader;

import React from "react";

// COMPONENTS
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

// IMAGES
import heroImage from "../../../public/assets/images/social_business/org_image-1.png";

// CSS
import styles from "./SocialBusinessOrgHeader.module.scss";

const SocialBusinessOrgHeader = () => {
  const { headerHero, heroBody, imageContainer, mask } = styles;

  return (
    <div className={headerHero}>
      <HeroBanner large />
      <div className={heroBody}>
        <div className={imageContainer}>
          <div className={mask}>
            <span>Social Business</span>
            <h1>Organisations</h1>
          </div>
          <img src={heroImage.src} alt="hero-banner" />
        </div>
      </div>
    </div>
  );
};

export default SocialBusinessOrgHeader;

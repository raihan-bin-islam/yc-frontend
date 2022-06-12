import React from "react";

// COMPONENTS
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

// IMAGES
import heroImage from "../../../public/assets/images/social_business/hero_image.png";

// CSS
import styles from "./socialBusinessHeader.module.scss";

const SocialBusinessHeader = () => {
  const { headerHero, heroBanner, heroBody, imageContainer, mask } = styles;
  return (
    <section className={headerHero}>
      <HeroBanner large />
      <div className={heroBody}>
        <div className={imageContainer}>
          <div className={mask}>
            <h1>social business</h1>
            <span>designed to address social problems</span>
          </div>
          <img src={heroImage.src} alt="hero-banner" />
        </div>
      </div>
    </section>
  );
};

export default SocialBusinessHeader;

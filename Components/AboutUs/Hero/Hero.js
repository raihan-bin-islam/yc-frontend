import React from "react";

// import heroImage from "../../../public/assets/images/landing_page/hero_path.png";
import heroYunus from "../../../public/assets/images/about_us/banner.png";

// COMPONENTS
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

// CSS
import styles from "./hero.module.scss";

const Hero = () => {
  const { headerHero, heroBody, imageContainer, mask } = styles;
  return (
    <div className={headerHero}>
      <HeroBanner large />
      <div className={heroBody}>
        <div className={imageContainer}>
          <div className={mask}>
            <h1>GLOBAL HUB</h1>
            <span>For Social Business</span>
          </div>
          <img src={heroYunus.src} alt="hero-banner" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

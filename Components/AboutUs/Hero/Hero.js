import React from "react";
import styles from "./hero.module.scss";
import heroImage from "../../../public/assets/images/landing_page/hero_path.png";
import heroYunus from "../../../public/assets/images/about_us/banner.png";

const Hero = () => {
  const { headerHero, heroBanner, heroBody, heroContentLeft, heroContentRight, h2 } = styles;
  return (
    <section className={headerHero}>
      <div className={heroBanner}>
        <img src={heroImage.src} alt="hero-banner" />
      </div>
      <div className={heroBody}>
        <div>
          <img src={heroYunus.src} alt="hero-banner" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import styles from "./hero.module.scss";
import heroImage from "../../../public/assets/images/landing_page/hero_path.png";
import heroYunus from "../../../public/assets/images/prof_yunus/prof_yunus.png";

const Hero = () => {
  const { headerHero, heroBanner, heroBody, heroImageContainer, links } = styles;
  return (
    <section className={headerHero}>
      <div className={heroBanner}>
        <img src={heroImage.src} alt="hero-banner" />
      </div>
      <div className={heroBody}>
        <div className={heroImageContainer}>
          <img src={heroYunus.src} alt="hero-banner" />
          <ul className={links}>
            <li>
              <a href="#">link 1</a>
            </li>
            <li>
              <a href="#">link 1</a>
            </li>
            <li>
              <a href="#">link 1</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

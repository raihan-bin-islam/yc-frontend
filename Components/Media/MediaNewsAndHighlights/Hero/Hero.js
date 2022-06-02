import React from "react";
import HeroBanner from "../../../Shared/HeroBanner/HeroBanner";
import { heroContainer, heroImageContainer, sectionTitle } from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={heroContainer}>
      <HeroBanner large />
      <div className={heroImageContainer}>
        <img src="/assets/images/media/news-and-highlights/news-banner.png" alt="" />
        <h2 className={sectionTitle}>News & Highlights</h2>
      </div>
    </section>
  );
};

export default Hero;

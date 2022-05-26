import React from "react";
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

import { heroContainer, heroImg, heroTitle } from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={heroContainer}>
      <HeroBanner large />
      <div className={heroImg}>
        <img src="/assets/images/visit_programs/offshore_programs/bannerImage.png" alt="" />
        <h2 className={heroTitle}>Offshore Programs</h2>
      </div>
    </section>
  );
};

export default Hero;

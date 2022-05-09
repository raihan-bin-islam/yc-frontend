import React from "react";
import styles from "./homeheader.module.scss";
import heroImage from "../../../public/assets/images/landing_page/hero_path.png";
import heroYunus from "../../../public/assets/images/landing_page/hero_banner.webp";

// typewriter
import Typewriter from 'typewriter-effect';

//component
const HomeHeader = () => {
  const { headerHero, heroBanner, heroBody, heroContentLeft, heroContentRight, h2 } = styles;
  return (
    <section className={headerHero}>
      <div className={heroBanner}>
        <img className="animateBanner" src={heroImage.src} alt="hero-banner" />
      </div>
      <div className={heroBody}>
        <div>
          <img src={heroYunus.src} alt="hero-banner" />
        </div>
        <div className={heroContentLeft}>
          <h5>PROFESSOR MUHAMMAD YUNUS</h5>
          <h6>2006 Nobel Peace Laureate</h6>
        </div>
        <div className={heroContentRight}>
          {/* <span className={h2}>“If you imagine, someday it will happen; if you don’t imagine, it will never happen.”</span> */}
          <span className={h2}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('“If you imagine, someday it will happen; if you don’t imagine, it will never happen.”')
                  .start()
              }}
              options={{
                autoStart: true,
                delay: 75
              }}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;

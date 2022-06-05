import React from "react";

// COMPONENTS
import ButtonLight from "../../../Components/Shared/Button/Button";

// IMAGES
import aboutImage from "/public/assets/images/ysbc/about.png";
import becomeImage from "/public/assets/images/ysbc/become.png";

// LAYOUR
import OvalBase from "../../Shared/CommonSvg/OvalBase";

// CSS
import styles from "./YsbcBody.module.scss";

const YsbcBody = () => {
  const {
    ysbcBody,
    aboutSection,
    imageContainer,
    textContainer,
    box,
    layoutContainer,
  } = styles;

  return (
    <div className={ysbcBody}>
      <div className={layoutContainer}>
        <OvalBase />
      </div>
      <div className={`${aboutSection} container-layout`}>
        <h1>about ysbc</h1>
        <div className={box}>
          <div className={imageContainer}>
            <img src={aboutImage.src} alt="about image" />
          </div>
          <div className={textContainer}>
            <p>
              A Yunus Social Business Centre (YSBC) is a hub for social business
              in universities around the world, following the principles of
              Nobel Laureate Professor Muhammad Yunus. YSBCs are set in
              collaboration through agreement between Yunus Centre and the
              university with the aim of spreading the concept and practice of
              social business among the university students and researchers.
              YSBCs conduct research, teaching, academic program and curriculum
              development, action research, knowledge-sharing events in social
              business like competitions, workshops and seminars among other
              things. YSBCs also find new and innovative means to expand the
              concept of social business among the students and researchers and
              even outside the university to the larger community and region.
            </p>
            <ButtonLight text="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YsbcBody;

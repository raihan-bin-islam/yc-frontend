import React from "react";

// COMPONENTS
import Sliders from "../../Shared/Slider/Slider";
import Pagination from "../../Shared/Pagination/Pagination";

// LAYOUT
import LeftLayout from "../../Shared/CommonSvg/LeftLayout";
import Layout from "../../Shared/CommonSvg/Layout";

// CSS
import styles from "./SocialBusinessPastEventsBody.module.scss";

const SocialBusinessPastEventsBody = () => {
  const {
    pastEventBody,
    pastEvents,
    sliderContainer,
    layoutContainer,
    paginationContainer,
    leafContainer,
  } = styles;

  return (
    <div className={pastEventBody}>
      <div className={layoutContainer}>
        <LeftLayout />
      </div>
      <div className={`${pastEvents} container-layout`}>
        <h1>2021</h1>
        <div className={sliderContainer}>
          <Sliders />
        </div>
      </div>
      <div className={`${pastEvents} container-layout`}>
        <h1>2020</h1>
        <div className={sliderContainer}>
          <Sliders />
        </div>
      </div>
      <div className={`${pastEvents} container-layout`}>
        <h1>2019</h1>
        <div className={sliderContainer}>
          <Sliders />
        </div>
      </div>
      <div className={paginationContainer}>
        <Pagination />
      </div>
      <div className={leafContainer}>
        <Layout />
      </div>
    </div>
  );
};

export default SocialBusinessPastEventsBody;

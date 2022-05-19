import React from "react";

import Slider from "react-slick/lib/slider";
import SliderCard from "../../Shared/SliderCard/SliderCard";

import Arrow from "../../Shared/Arrows/Arrow";

import styles from "./homelatestevents.module.scss";

import PreLoader from "../../Shared/PreLoader/PreLoader";

const HomeLatestEvents = ({ isLoading, latestEvents }) => {

  console.log(latestEvents)
  // Module style object destructuring
  const { homeHeading, homeEventsContainer, homeEventsHeader, homeEventsBody } = styles;

  // Slick Slider Settingss
  const sliderSettings = {
    dots: false,
    infinite: latestEvents.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    appendArrows: homeEventsBody,
    cssEase: "ease-in-out",
    prevArrow: <Arrow type="prev" size={100} />,
    nextArrow: <Arrow size={100} />,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={homeEventsContainer}>
      <div className="container-layout">
        <div className={homeEventsHeader}>
          <h2 className={homeHeading}>Latest Events</h2>
        </div>
        <div className={homeEventsBody}>
          <Slider {...sliderSettings}>
            {!isLoading ? (
              latestEvents &&
              latestEvents.map(({ thumb_image, title }, index) => {
                return <SliderCard key={index} image={thumb_image} title={title} type="events" />;
              })
            ) : (
              <PreLoader />
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeLatestEvents;

import React from "react";

import Slider from "react-slick/lib/slider";
import SliderCard from "../../Shared/SliderCard/SliderCard";

import PrevArrow from "../../Shared/Arrows/PrevArrow";
import NextArrow from "../../Shared/Arrows/NextArrow";

import styles from "./homelatestevents.module.scss";
import { latestEvents } from "./latestEvents";

const HomeLatestEvents = () => {
  const { homeHeading, homeEventsContainer, homeEventsHeader, homeEventsBody } = styles;

  const sliderSettings = {
    dots: false,
    infinite: latestEvents.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    appendArrows: homeEventsBody,
    cssEase: "ease-in-out",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
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
            {latestEvents.map(({ image, title }, index) => {
              return <SliderCard key={index} image={image} title={title} type="events" />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeLatestEvents;

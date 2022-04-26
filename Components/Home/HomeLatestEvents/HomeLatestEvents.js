import React from "react";
import Slider from "react-slick/lib/slider";
import Heading from "../../Shared/Heading/Heading";
import SliderCard from "../../Shared/SliderCard/SliderCard";
import NextArrow from "./Arrows/NextArrow";
import PrevArrow from "./Arrows/PrevArrow";
import styles from "./homelatestevents.module.scss";
import { latestEvents } from "./latestEvents";

const HomeLatestEvents = () => {
  const { homeEventsContainer, homeEventsHeader, homeEventsBody } = styles;

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
          <Heading text="latest events" white />
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

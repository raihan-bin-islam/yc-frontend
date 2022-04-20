import React from "react";
import Slider from "react-slick/lib/slider";
import Heading from "../../Shared/Heading/Heading";
import SliderCard from "../../Shared/SliderCard/SliderCard";
import NextArrow from "./Arrows/NextArrow";
import PrevArrow from "./Arrows/PrevArrow";
import styles from "./homelatestevents.module.scss";

const HomeLatestEvents = () => {
  const { homeEventsContainer, homeEventsHeader, homeEventsBody } = styles;
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
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
            <SliderCard />
            <SliderCard />
            <SliderCard />
            <SliderCard />
            <SliderCard />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeLatestEvents;

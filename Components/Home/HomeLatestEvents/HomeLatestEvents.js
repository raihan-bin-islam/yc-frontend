import React from "react";

import Slider from "react-slick/lib/slider";
import SliderCard from "../../Shared/SliderCard/SliderCard";

import Arrow from "../../Shared/Arrows/Arrow";

import styles from "./homelatestevents.module.scss";

import PreLoader from "../../Shared/PreLoader/PreLoader";
import ButtonLight from "../../Shared/Button/Button";

import Link from "next/link";

const HomeLatestEvents = ({ isLoading, latestEvents }) => {
  // Module style object destructuring
  const {
    homeHeading,
    homeEventsContainer,
    homeEventsHeader,
    homeEventsBody,
    buttonComponent,
    linkableCard,
  } = styles;

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
              latestEvents.map(({ id, thumb_image, title, link }, index) => {
                return (
                  <Link href={link} key={index}>
                    <a target="_blank">
                      <div className={linkableCard}>
                        <SliderCard
                          key={index}
                          image={thumb_image}
                          title={title}
                          type="events"
                        />
                      </div>
                    </a>
                  </Link>
                );
              })
            ) : (
              <PreLoader />
            )}
          </Slider>
        </div>
      </div>
      <div className={buttonComponent}>
        <Link href="#">
          <ButtonLight text="See All" />
        </Link>
      </div>
    </section>
  );
};

export default HomeLatestEvents;

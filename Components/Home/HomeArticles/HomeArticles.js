import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Article Data
import { articles } from "./articles";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Section Styles
import styles from "./home_articles.module.scss";

import SliderCard from "../../Shared/SliderCard/SliderCard";

const HomeArticles = () => {
  const { articleSection, mySwiper, container, slider } = styles;
  const [numOfSlides, setNumOfSlides] = useState(3);
  const onMobileScreen = () => {
    if (window.innerWidth < 960) {
      setNumOfSlides(1);
      return;
    }
    setNumOfSlides(3);
  };

  useEffect(() => {
    // if (window.innerWidth < 960) {
    //   setNumOfSlides(1);
    // }
    window.addEventListener("resize", onMobileScreen);
    return () => window.removeEventListener("resize", onMobileScreen);
  });

  return (
    <section className={articleSection}>
      <Swiper // install Swiper modules
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={true}
      >
        {articles.map(({ img, title }, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderCard image={img} title={title} type="articles" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HomeArticles;

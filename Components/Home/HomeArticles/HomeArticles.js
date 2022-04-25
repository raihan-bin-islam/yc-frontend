import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Article Data
import { articles } from "./articles";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Section Styles
import styles from "./home_articles.module.scss";

// Import Other Required Components
import SliderCard from "../../Shared/SliderCard/SliderCard";
import Heading from "../../Shared/Heading/Heading";
import Background from "./Background";

const HomeArticles = () => {
  const { articleSection, articleBg, swiperWrapper, author } = styles;
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
    <section className={`${articleSection}`}>
      <Heading text="articles" center />
      <p className={author}>By Professor Muhammad Yunus</p>
      <div className={`${swiperWrapper} container-layout`}>
        <Background classname={articleBg} />
        <Swiper // install Swiper modules
          slidesPerView={numOfSlides}
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
      </div>
    </section>
  );
};

export default HomeArticles;

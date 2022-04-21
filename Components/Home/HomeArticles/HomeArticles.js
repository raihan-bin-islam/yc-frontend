import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Section Styles
import styles from "./home_articles.module.scss";

// Swiper Modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SliderCard from "../../Shared/SliderCard/SliderCard";

const HomeArticles = () => {
  const { articleSection, mySwiper, container, slider } = styles;
  return (
    <section className={articleSection}>
      <Swiper // install Swiper modules
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={mySwiper}
      >
        <SwiperSlide>
          <SliderCard type="articles" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard type="articles" size={2} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard type="articles" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard type="articles" size={2} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard type="articles" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard type="articles" size={2} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeArticles;

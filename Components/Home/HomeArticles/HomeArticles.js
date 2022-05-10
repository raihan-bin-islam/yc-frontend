import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'

// Import Article Data
import { articles } from "./articles";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

// Import Section Styles
import styles from "./home_articles.module.scss";

// Import Other Required Components
import SliderCard from "../../Shared/SliderCard/SliderCard";
import Background from "./Background";
import useFetch from "../../Hooks/useFetch";

const HomeArticles = () => {
  const { heading, articleSection, articleBg, swiperWrapper, author, articleFooter } = styles;
  const [numOfSlides, setNumOfSlides] = useState(3);
  const [isNavigation, setIsNavigation] = useState(true)
  const articlesData = useFetch("/articles");
  // useEffect(() => {
  //   return articlesData
  // }, [articlesData]);

  const onMobileScreen = () => {
    if (window.innerWidth < 960) {
      setNumOfSlides(1);
      setIsNavigation(false)
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

  useEffect(()=> {
    const prevBtn = document.querySelector('.swiper-button-prev')
    prevBtn ? prevBtn.style.display = 'none' : ''
  }, [])

  const HandleSwipe = () => {
    const prevBtn = document.querySelector('.swiper-button-prev')
    prevBtn ? prevBtn.style.display = 'block' : ''
  }

  const HandleBeginning = () => {
    const prevBtn = document.querySelector('.swiper-button-prev')
    prevBtn ? prevBtn.style.display = 'none' : ''
  }

  return (
    <section className={`${articleSection}`}>
      <h2 className={heading}>articles</h2>
      <p className={author}>By Professor Muhammad Yunus</p>
      <div className={`${swiperWrapper}`}>
        <Background classname={articleBg} />
        {/* install Swiper modules */}
        <Swiper
          slidesPerView={numOfSlides}
          spaceBetween={0}
          centeredSlides={true}
          navigation={isNavigation}
          pagination={{
            clickable: true
          }}
          modules={[Pagination, Navigation]}
          onSlideNextTransitionStart={HandleSwipe}
          onReachBeginning={HandleBeginning}
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
      {/* see all */}
      <div className={articleFooter}>
        <Link href='/'>See All</Link>
      </div>
    </section>
  );
};

export default HomeArticles;

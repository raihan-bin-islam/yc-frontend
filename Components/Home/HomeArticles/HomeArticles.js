import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

// Import Section Styles
import styles from "./home_articles.module.scss";

// Import Other Required Components
import SliderCard from "../../Shared/SliderCard/SliderCard";
import Background from "./Background";
import PreLoader from "../../Shared/PreLoader/PreLoader";

const HomeArticles = ({ isLoading, articlesData }) => {
  // UI States
  const [numOfSlides, setNumOfSlides] = useState(3);
  const [isNavigation, setIsNavigation] = useState(true);
  // Module Style Object Destructuring
  const { heading, articleSection, articleBg, swiperWrapper, author, articleFooter } = styles;

  // On Mobile Screen Set the number of slides to 1
  const onMobileScreen = () => {
    if (window.innerWidth < 960) {
      setNumOfSlides(1);
      setIsNavigation(false);
      return;
    }
    setNumOfSlides(3);
  };

  //
  useEffect(() => {
    window.addEventListener("resize", onMobileScreen);
    return () => window.removeEventListener("resize", onMobileScreen);
  });

  // Swiper Settings
  useEffect(() => {
    const prevBtn = document.querySelector(".swiper-button-prev");
    prevBtn ? (prevBtn.style.display = "none") : "";
  }, []);

  const HandleSwipe = () => {
    const prevBtn = document.querySelector(".swiper-button-prev");
    prevBtn ? (prevBtn.style.display = "block") : "";
  };

  const HandleBeginning = () => {
    const prevBtn = document.querySelector(".swiper-button-prev");
    prevBtn ? (prevBtn.style.display = "none") : "";
  };

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
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          onSlideNextTransitionStart={HandleSwipe}
          onReachBeginning={HandleBeginning}
        >
          {!isLoading ? (
            articlesData &&
            articlesData.map(({ title, thumb_image, fb_post_link }, index) => {
              return (
                <SwiperSlide key={index}>
                  <SliderCard image={thumb_image} title={title} link={fb_post_link} type="articles" />
                </SwiperSlide>
              );
            })
          ) : (
            <PreLoader />
          )}
        </Swiper>
      </div>
      {/* see all */}
      <div className={articleFooter}>
        <Link href="/">See All</Link>
      </div>
    </section>
  );
};

export default HomeArticles;

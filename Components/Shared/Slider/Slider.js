import React from "react";
import Link from "next/link";

// COMPONENTS
import SliderCard from "../SliderCard/SliderCard";
import PreLoader from "../PreLoader/PreLoader";
import Arrow from "../Arrows/Arrow";

// SLICK
import Slider from "react-slick/lib/slider";

// DATA
// import sliderData from "./data";

// CSS
import styles from "./Slider.module.scss";
import RecentNewsCard from "../RecentNewsCard/RecentNewsCard";

const Sliders = ({ cardType, numberOfSlides = 4, sliderData }) => {
  const { slider, linkableCard } = styles;

  // Slick Slider Settingss
  const sliderSettings = {
    dots: false,
    infinite: sliderData.length > numberOfSlides,
    speed: 500,
    slidesToShow: numberOfSlides,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: 0, // added to remove extra padding on both side of the slider
    cssEase: "ease-in-out",
    appendArrows: ".slider-arrow",
    prevArrow: <Arrow type="prev" recentNews={cardType == "newsCard"} />,
    nextArrow: <Arrow recentNews={cardType == "newsCard"} />,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={slider}>
      {cardType != "newsCard" ? (
        <Slider {...sliderSettings}>
          {sliderData &&
            sliderData.map((data) => {
              return (
                <Link href={data.youtube_link || data.link} key={data.id}>
                  <a target="_blank">
                    <div className={linkableCard}>
                      <SliderCard key={data.id} image={data.thumb_image} title={data.title} type={cardType} />
                    </div>
                  </a>
                </Link>
              );
            })}
        </Slider>
      ) : (
        <Slider {...sliderSettings}>
          {sliderData &&
            sliderData.map((data) => {
              return (
                <RecentNewsCard
                  key={data.id}
                  image={data.thumb_image}
                  title={data.title}
                  publishedBy="Published by Yunus Centre"
                  pressRelease={data.published_at}
                  newsContent={data.desc}
                />
              );
            })}
        </Slider>
      )}
    </div>
  );
};

export default Sliders;

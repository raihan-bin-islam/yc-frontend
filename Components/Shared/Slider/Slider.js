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

const Sliders = ({ numberOfSlides = 4, sliderData }) => {
  const { slider, linkableCard } = styles;

  // Slick Slider Settingss
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: numberOfSlides,
    slidesToScroll: 1,
    centerMode: false,
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
      <Slider {...sliderSettings}>
        {sliderData.map((data) => {
          return (
            <Link href={data.link} key={data.id}>
              <a target="_blank">
                <div className={linkableCard}>
                  <SliderCard key={data.id} image={data.thumb_image} title={data.title} type="magazine" />
                </div>
              </a>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sliders;

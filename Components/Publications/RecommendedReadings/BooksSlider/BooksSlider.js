import React from "react";
import Slider from "react-slick/lib/slider";
import Arrow from "../../../Shared/Arrows/Arrow";
import Link from "next/link";

import PreLoader from "../../../Shared/PreLoader/PreLoader";

import { booksCardSlider, bookCardContainer } from "./booksSlider.module.scss";

const BooksSlider = ({ isLoading, booksData }) => {
  // Slick Slider Settings
  const sliderSettings = {
    dots: false,
    infinite: booksData.length > 6,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: false,
    appendArrows: booksCardSlider,
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
    <section className={`${booksCardSlider} container-layout`}>
      <Slider {...sliderSettings}>
        {!isLoading ? (
          booksData &&
          booksData.map(({ id, thumb_image, link }) => {
            return (
              <Link href={link} key={id}>
                <a target="_blank">
                  <div className={bookCardContainer}>
                    <img src={thumb_image} alt="" />
                  </div>
                </a>
              </Link>
            );
          })
        ) : (
          <PreLoader />
        )}
      </Slider>
    </section>
  );
};

export default BooksSlider;

import React, { useState, useEffect } from "react";
import Slider from "react-slick/lib/slider";
import Arrow from "../../Shared/Arrows/Arrow";
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";
import PreLoader from "../../Shared/PreLoader/PreLoader";
import {
  container,
  heroContent,
  sectionTitle,
  bookDetailsContainer,
  bookDetails,
  author,
  details,
  booksCardSlider,
  bookCardContainer,
} from "./recommendedReadings.module.scss";

const RecommendedReadings = ({ isLoading, booksData }) => {
  const [recommendedBook, setRecommendedBook] = useState(booksData[0]);
  useEffect(() => {
    console.log(recommendedBook);
  }, [recommendedBook]);

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
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 960,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className={container}>
        <HeroBanner large />
        <div className={heroContent}>
          <h2 className={sectionTitle}>Recommended Readings</h2>
          <div className={bookDetailsContainer}>
            <img src={recommendedBook.thumb_image} alt="" />
            <div className={bookDetails}>
              <div>
                <h3>{recommendedBook.title}</h3>
                <p className={author}>By Professor Muhammad Yunus</p>
              </div>
              <p className={details}>
                The University Press Limited Red Crescent House, Level 6 61 Motijheel C/A, Dhaka-1000 Ph#+88029565441.
                01917733741 info@uplbooks.com.bd
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Books Slider */}
      <section className={`${booksCardSlider} container-layout`}>
        <Slider {...sliderSettings}>
          {!isLoading ? (
            booksData &&
            booksData.map(({ id, title, thumb_image }) => {
              return (
                <div
                  key={id}
                  className={bookCardContainer}
                  onClick={() => setRecommendedBook({ id: id, title: title, thumb_image: thumb_image })}
                >
                  <img src={thumb_image} alt="" />
                </div>
              );
            })
          ) : (
            <PreLoader />
          )}
        </Slider>
      </section>
    </>
  );
};

export default RecommendedReadings;

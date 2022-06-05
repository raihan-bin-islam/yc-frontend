import React, { useState } from "react";
import Slider from "react-slick/lib/slider";
import Arrow from "../../Shared/Arrows/Arrow";
import ButtonLight from "../../Shared/Button/Button";
import LeafSvg from "../../Shared/CommonSvg/LeafSvg";
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";
import PreLoader from "../../Shared/PreLoader/PreLoader";
import SliderCard from "../../Shared/SliderCard/SliderCard";
import {
  heroContainer,
  heroImageContainer,
  sectionTitle,
  magazineContainer,
  magazineTitle,
  buttonContainer,
  leafSvg,
} from "./internsMagazine.module.scss";

const InternsMagazine = ({ isLoading, magazines }) => {
  // Magazine data for hero section
  const [magazineData, setMagazineData] = useState(magazines[0]);

  // slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: magazines.length > 6,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: false,
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
      <section className={heroContainer}>
        <HeroBanner large />
        <div className={heroImageContainer}>
          <h2 className={sectionTitle}>Interns magazine</h2>
          <p>
            YC Intern Magazine basically gives you the idea about the internship program. This magazine tells the
            stories about the experience of the interns during the internship period. They talk about themselves, talk
            about the visiting fields and meetings. Exploring the new culture of Bangladesh; adapting with the people
            and lot more. So to know more about the Internship program check our YC Intern Magazine.
          </p>
          <div className={magazineContainer}>
            <img src={magazineData.thumb_image} alt="" />
            <h5 className={magazineTitle}>{magazineData.title}</h5>
            <div className={buttonContainer}>
              <ButtonLight text="Read" />
              <ButtonLight text="Download" />
            </div>
          </div>
        </div>
        <LeafSvg className={leafSvg} />
      </section>
      {/* Magazine Slider */}
      <section className={`container-layout pb10`}>
        <Slider {...sliderSettings}>
          {!isLoading ? (
            magazines &&
            magazines.map(({ id, title, thumb_image }) => {
              return (
                <SliderCard
                  key={id}
                  image={thumb_image}
                  title={title}
                  type="magazine"
                  onClick={() => setMagazineData({ id: id, title: title, thumb_image: thumb_image })}
                />
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

export default InternsMagazine;

/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

// Slick slider
import Slider from "react-slick/lib/slider";

// Styles
import styles from "./homevideoslide.module.scss";
import leafImg from "../../../public/assets/images/landing_page/yunus_leaf.png";

// Components
import SliderCard from "../../Shared/SliderCard/SliderCard";
import Arrow from "../../Shared/Arrows/Arrow";
import ButtonLight from "../../Shared/Button/Button";

import Link from "next/link";

// Custom Hooks
// import PreLoader from "../../Shared/PreLoader/PreLoader";

const HomeVideoSlide = ({ isLoading, videoData }) => {
  // States
  const [uniqueId, setUniqueId] = useState("");
  const [activeClass, setActiveClass] = useState(false);

  // set Initial video link to the first video after video data is fetched
  useEffect(() => {
    videoData.length > 0 && setVideoUrl(videoData[0].youtube_link);
  }, [videoData]);

  // set the video url according to the click on the thumbnail
  const setVideoUrl = (url) => {
    const id = url.substring(url.lastIndexOf("/") + 1, url.length);
    // If the link is not shortened link
    if (id.includes("watch?v=")) {
      const newId = id.split("?v=");
      const slicedId = newId[1];
      setUniqueId(slicedId);
      return;
    }

    setUniqueId(id);
  };

  // styles
  const {
    videoSlideContainer,
    videoSliderBody,
    videoHeroContainer,
    videoLeaf,
    buttonComponent,
  } = styles;
  const handleOnClick = (link) => {
    setVideoUrl(link);
    setActiveClass(true);
  };

  // slider settings
  const youTubeSlider = {
    dots: false,
    infinite: videoData && videoData.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    appendArrows: videoSliderBody,
    cssEase: "ease-in-out",
    prevArrow: <Arrow type="prev" />,
    nextArrow: <Arrow />,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          // centerMode: true,
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <section className={videoSlideContainer}>
      <div className={videoLeaf}>
        <img src={leafImg.src} alt="yunus-leaf" />
      </div>

      <div className={videoSliderBody}>
        <div className={videoHeroContainer}>
          {uniqueId !== "" && (
            <object data={`https://www.youtube.com/embed/${uniqueId}`}></object>
          )}
        </div>
        <div className="mt3">
          {!isLoading
            ? videoData && (
                <Slider {...youTubeSlider}>
                  {videoData.map(({ id, thumb_image, title, youtube_link }) => {
                    return (
                      <SliderCard
                        key={id}
                        image={thumb_image}
                        title={title}
                        type="video"
                        onClick={() => handleOnClick(youtube_link)}
                      />
                    );
                  })}
                </Slider>
              )
            : null}
        </div>
        <Link href="#">
          <div className={buttonComponent}>
            <ButtonLight text="View All" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HomeVideoSlide;

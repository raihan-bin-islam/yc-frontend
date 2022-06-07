import React from "react";
import Link from "next/link";

// COMPONENTS
import ButtonLight from "../../Shared/Button/Button";
import Sliders from "../../Shared/Slider/Slider";

// LAYOUT
import LeftLayout from "../../Shared/CommonSvg/LeftLayout";
import Layout from "../../Shared/CommonSvg/Layout";

// DATA
import useFetch from "../../Hooks/useFetch";

// CSS
import styles from "./MediaVideosBody.module.scss";

const MediaVideosBody = () => {
  const { videosBody, sliderSection, sliderContainer, btnContainer, layoutContainer, leafContainer } = styles;

  const [isLoading, data] = useFetch("/yunus-speech");

  return (
    <div className={videosBody}>
      <div className={layoutContainer}>
        <LeftLayout />
      </div>
      <div className={`${sliderSection} container-layout`}>
        <h1>interviews</h1>
        <div className={sliderContainer}>
          <Sliders cardType="video" sliderData={data} numberOfSlides={4} />
        </div>
        <div className={btnContainer}>
          <Link href="/media/videos/interviews" passHref>
            <ButtonLight text="See All" />
          </Link>
        </div>
      </div>
      <div className={`${sliderSection} container-layout`}>
        <h1>speeches</h1>
        <div className={sliderContainer}>
          <Sliders cardType="video" sliderData={data} numberOfSlides={4} />
        </div>
        <div className={btnContainer}>
          <Link href="/professor-yunus/speeches" passHref>
            <ButtonLight text="See All" />
          </Link>
        </div>
      </div>
      <div className={`${sliderSection} container-layout`}>
        <h1>social business</h1>
        <div className={sliderContainer}>
          <Sliders cardType="video" sliderData={data} numberOfSlides={4} />
        </div>
        <div className={btnContainer}>
          <Link href="/media/videos/social-business" passHref>
            <ButtonLight text="See All" />
          </Link>
        </div>
      </div>
      <div className={`${sliderSection} container-layout`}>
        <h1>ysbc web lecture series</h1>
        <div className={sliderContainer}>
          <Sliders cardType="video" sliderData={data} numberOfSlides={4} />
        </div>
        <div className={btnContainer}>
          <Link href="/media/videos/ysbc-web-lecture-series" passHref>
            <a>
              <ButtonLight text="See All" />
            </a>
          </Link>
        </div>
      </div>
      <div className={leafContainer}>
        <Layout />
      </div>
    </div>
  );
};

export default MediaVideosBody;

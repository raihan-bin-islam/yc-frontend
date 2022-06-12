import React from "react";

// COMPONENTS
import HeroBannerSmall from "../../../Shared/HeroBannerSmall/HeroBannerSmall";

// IMAGE
import newImage from "../../../../public/assets/images/media/news-and-highlights/news-image.png";

// API
import useFetch from "../../../Hooks/useFetch";

// CSS
import styles from "./SingleNewsHeader.module.scss";

function SingleNewsHeader({ singleNewsData }) {
  const { newsHeader, textContainer, box, contentContainer, imageContainer } = styles;

  // const [isLoading, data] = useFetch("/news");

  // console.log(data);

  return (
    <div className={newsHeader}>
      <HeroBannerSmall />
      <div className={`${contentContainer} container-layout`}>
        <div className={textContainer}>
          <h1>{singleNewsData?.title}</h1>
          <div className={box}>
            <span>Published by Yunus Centre</span>
            <span>{singleNewsData?.published_at}</span>
          </div>
        </div>
        <div className={imageContainer}>
          <img src={singleNewsData?.thumb_image} alt="image" />
          <span>{singleNewsData?.image_caption}</span>
        </div>
      </div>
    </div>
  );
}

export default SingleNewsHeader;

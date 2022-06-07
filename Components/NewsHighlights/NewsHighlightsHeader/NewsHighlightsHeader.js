import React from "react";

// COMPONENTS
import HeroBannerSmall from "../../Shared/HeroBanerSmall/HeroBannerSmall";

// IMAGE
import newImage from "../../../public/assets/images/media/news-and-highlights/news-image.png";

// API
import useFetch from "../../Hooks/useFetch";

// CSS
import styles from "./NewsHighlightsHeader.module.scss";

function NewsHighlightsHeader(props) {
  const { newsHeader, textContainer, box, contentContainer, imageContainer } =
    styles;

  const [isLoading, data] = useFetch("/news");

  console.log(data);

  return (
    <div className={newsHeader}>
      <HeroBannerSmall />
      <div className={`${contentContainer} container-layout`}>
        <div className={textContainer}>
          <h1>Mahathir Mohammad Invites Professor Yunus for a Discussion</h1>
          <div className={box}>
            <span>Published by Yunus Centre</span>
            <span>Press Release (March 30, 2022)</span>
          </div>
        </div>
        <div className={imageContainer}>
          <img src={newImage.src} alt="image" />
          <span>
            Nobel Peace laureate Professor Muhammad Yunus and Mahathir Mohammad
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsHighlightsHeader;

import React, { useState } from "react";
// import useFetch from "../Hooks/useFetch";
import HeroBanner from "../HeroBanner/HeroBanner";
import Pagination from "../Pagination/Pagination";
import SliderCard from "../SliderCard/SliderCard";
import Layout from "../CommonSvg/Layout";
import styles from "./videoSubPage.module.scss";

const VideoSubPage = ({ heading, subHeading, videoData }) => {
  // console.log(videoData);
  // classnames
  const {
    speechContainer,
    speechContainerHeader,
    speechContainerBody,
    speechContainerBodyRow,
    speechContainerFooter,
    leafContainer,
  } = styles;

  // fetch data
  // const [videoIsLoading, videoData] = useFetch("/yunus-speech");

  // paginate
  const [startOffset, setStartOffset] = useState(1);
  const [endOffset, setEndOffset] = useState(3);
  const contentsPerPage = 16;

  const handlePageClick = (e) => {
    const currentPage = e.selected;
    setStartOffset(contentsPerPage * currentPage + 1);
    setEndOffset(contentsPerPage * currentPage + contentsPerPage);
  };

  return (
    <section className={speechContainer}>
      <div className={speechContainerHeader}>
        <HeroBanner />
        <div>
          <h2>{heading}</h2>
          <h3>{subHeading}</h3>
        </div>
      </div>
      <div className={`${speechContainerBody} container-layout`}>
        <div className={speechContainerBodyRow}>
          {videoData &&
            videoData.slice(0, 4).map((vdo) => (
              <a key={vdo.id} href={vdo.youtube_link}>
                <SliderCard
                  key={vdo.id}
                  image={vdo.thumb_image}
                  title={vdo.title}
                  type="video"
                />
              </a>
            ))}
        </div>
        <div className={speechContainerBodyRow}>
          {videoData &&
            videoData
              .slice(4, 8)
              .map((vdo) => (
                <SliderCard
                  key={vdo.id}
                  image={vdo.thumb_image}
                  title={vdo.title}
                  type="video"
                  onClick={() => handleOnClick(vdo.youtube_link)}
                />
              ))}
        </div>
        <div className={speechContainerBodyRow}>
          {videoData &&
            videoData
              .slice(8, 12)
              .map((vdo) => (
                <SliderCard
                  key={vdo.id}
                  image={vdo.thumb_image}
                  title={vdo.title}
                  type="video"
                  onClick={() => handleOnClick(vdo.youtube_link)}
                />
              ))}
        </div>
        <div className={speechContainerBodyRow}>
          {videoData &&
            videoData
              .slice(12, 16)
              .map((vdo) => (
                <SliderCard
                  key={vdo.id}
                  image={vdo.thumb_image}
                  title={vdo.title}
                  type="video"
                  onClick={() => handleOnClick(vdo.youtube_link)}
                />
              ))}
        </div>
      </div>
      <div className={speechContainerFooter}>
        <Pagination
          length={videoData && videoData.length}
          contentsPerPage={contentsPerPage}
          onPageChange={handlePageClick}
        />
      </div>
      <div className={leafContainer}>
        <Layout />
      </div>
    </section>
  );
};

export default VideoSubPage;

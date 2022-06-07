import React, { useState } from "react";

// Component
import Pagination from "../Pagination/Pagination";
import SliderCard from "../SliderCard/SliderCard";
import Layout from "../CommonSvg/Layout";
import HeroBannerSmall from "../HeroBannerSmall/HeroBannerSmall";
// Styles
import styles from "./videoSubPage.module.scss";

const VideoSubPage = ({ heading, subHeading, videoData }) => {
  // classnames
  const {
    speechContainer,
    speechContainerHeader,
    speechContainerBody,
    speechContainerBodyRow,
    speechContainerFooter,
    leafContainer,
  } = styles;

  // paginate
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(16);
  const chunkSize = 4;
  const contentsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  // on page change
  const handlePageClick = (e) => {
    // save the number of the current page
    const currentPage = e.selected; // starts with 0 (just like array indices)
    // set the start and end offset, as well as the active page number
    setStartOffset(contentsPerPage * currentPage + 1);
    setEndOffset(contentsPerPage * currentPage + contentsPerPage);
    setCurrentPage(currentPage + 1);
  };

  return (
    <section className={speechContainer}>
      <div className={speechContainerHeader}>
        <HeroBannerSmall title={heading} subtitle={subHeading && subHeading} />
      </div>
      <div className={`${speechContainerBody} container-layout`}>
        <div className={speechContainerBodyRow}>
          {videoData &&
            videoData.slice(startOffset, chunkSize).map((vdo) => (
              <a key={vdo.id} href={vdo.youtube_link}>
                <SliderCard key={vdo.id} image={vdo.thumb_image} title={vdo.title} type="video" />
              </a>
            ))}
        </div>
        <div className={speechContainerBodyRow}>
          {videoData &&
            videoData
              .slice(chunkSize, 2 * chunkSize)
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
              .slice(2 * chunkSize, 3 * chunkSize)
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
              .slice(3 * chunkSize, endOffset)
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

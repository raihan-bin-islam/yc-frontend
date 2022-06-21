import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import HeroBannerSmall from "../HeroBannerSmall/HeroBannerSmall";
import HeroBanner from "../HeroBanner/HeroBanner";
import Highlight from "../Highlight/Highlight";
import Pagination from "../Pagination/Pagination";
import Sliders from "../Slider/Slider";

// import newsData from "./dummyData.json";

import {
  heroContainer,
  heroTitle,
  libraryContainer,
  recentNewsContainer,
  recentNewsTitle,
  gridItem,
} from "./mediaLibraryPage.module.scss";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

const MediaLibraryPage = ({ title, newsData }) => {
  const [startOffset, setStartOffset] = useState(0); // start offset (should start from 0)
  const [endOffset, setEndOffset] = useState(15); // end offset (number of objects we want to show)
  const [pageNumber, setPageNumber] = useState(1); // Current page number

  const chunkSize = 5; // Size of each chunk of array
  const contentsPerPage = 15;

  const handlePageClick = (e) => {
    const currentPage = e.selected; // selected page index (Starts from 0)
    setStartOffset(contentsPerPage * currentPage); //start index
    setEndOffset(contentsPerPage * currentPage + contentsPerPage); //end index
    setPageNumber(currentPage + 1);
  };

  return (
    <>
      {/*  Hero section */}
      <section className={heroContainer}>
        <HeroBannerSmall title={title} />
      </section>
      <BreadCrumb />
      {/* Library Section */}
      <section className={`${libraryContainer} container-layout pt10`}>
        {/* 1st chunk of data */}
        <div className={gridItem}>
          {newsData.length > 0 &&
            newsData.slice(startOffset, startOffset + chunkSize).map(({ id, thumb_image, title }, index) => {
              return <Highlight key={id} image={thumb_image} description={title} />;
            })}
        </div>
        {/* 2nd chunk of data */}
        {startOffset + 2 * chunkSize <= newsData.length && (
          <div className={gridItem}>
            {newsData.length > 0 &&
              newsData
                .slice(startOffset + chunkSize, startOffset + 2 * chunkSize)
                .map(({ id, thumb_image, title }, index) => {
                  return <Highlight key={id} image={thumb_image} description={title} />;
                })}
          </div>
        )}

        {/* 3rd chunk of data */}
        <div className={gridItem}>
          {newsData.length > 0 &&
            newsData.slice(startOffset + 2 * chunkSize, endOffset).map(({ id, thumb_image, title }, index) => {
              return <Highlight key={id} image={thumb_image} description={title} />;
            })}
        </div>
      </section>
      {/* Pagination Component */}
      <Pagination
        length={newsData.length}
        contentsPerPage={contentsPerPage}
        onPageChange={handlePageClick}
        currentPage={pageNumber}
      />
      {/* Recent News */}
      <section className={`${recentNewsContainer} container-layout pt10 pb10`}>
        <h2 className={recentNewsTitle}>Recent News</h2>
        <Sliders cardType="newsCard" sliderData={newsData} />
      </section>
    </>
  );
};

export default MediaLibraryPage;

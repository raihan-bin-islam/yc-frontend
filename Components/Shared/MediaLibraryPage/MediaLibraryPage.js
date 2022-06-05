import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import HeroBanner from "../HeroBanner/HeroBanner";
import Highlight from "../Highlight/Highlight";
import Pagination from "../Pagination/Pagination";
import Sliders from "../Slider/Slider";

import {
  heroContainer,
  heroTitle,
  libraryContainer,
  recentNewsContainer,
  recentNewsTitle,
} from "./mediaLibraryPage.module.scss";

const MediaLibraryPage = () => {
  const [isLoading, newsData] = useFetch("/news");

  const [startOffset, setStartOffset] = useState(1);
  const [endOffset, setEndOffset] = useState(15);
  const contentsPerPage = 15;

  const handlePageClick = (e) => {
    const currentPage = e.selected;
    setStartOffset(contentsPerPage * currentPage + 1);
    setEndOffset(contentsPerPage * currentPage + contentsPerPage);
  };

  return (
    <>
      {/*  Hero section */}
      <section className={heroContainer}>
        <HeroBanner />
        <h2 className={heroTitle}>News Library</h2>
      </section>
      {/* Library Section */}
      <section className={`${libraryContainer} container-layout pt10`}>
        {newsData.length > 0 &&
          newsData
            .filter((data, index) => index + 1 >= startOffset && index < endOffset)
            .map(({ id, thumb_image, title }, index) => {
              return (
                <React.Fragment key={id}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Highlight image={thumb_image} description={title} />
                  </div>
                </React.Fragment>
              );
            })}
      </section>
      <Pagination length={newsData.length} contentsPerPage={contentsPerPage} onPageChange={handlePageClick} />
      {/* Recent News */}
      <section className={`${recentNewsContainer} container-layout pt10 pb10`}>
        <h2 className={recentNewsTitle}>Recent News</h2>
        <Sliders cardType="newsCard" sliderData={newsData} />
      </section>
    </>
  );
};

export default MediaLibraryPage;

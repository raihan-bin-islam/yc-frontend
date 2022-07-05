import React, { useState, useEffect } from "react";

// COMPONENTS
import Sliders from "../../Shared/Slider/Slider";
import Pagination from "../../Shared/Pagination/Pagination";

// LAYOUT
import LeftLayout from "../../Shared/CommonSvg/LeftLayout";
import Layout from "../../Shared/CommonSvg/Layout";

// CSS
import styles from "./SocialBusinessPastEventsBody.module.scss";
import useFetch from "../../Hooks/useFetch";
import BreadCrumb from "../../Shared/BreadCrumb/BreadCrumb";

const SocialBusinessPastEventsBody = ({ pastEventsYearWise }) => {
  const contentsPerPage = 3;
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  // const [reverseArray, setReverseArray] = useState([]);

  // useEffect(() => {}, [pastEventsYearWise]);

  const {
    pastEventBody,
    pastEvents,
    sliderContainer,
    layoutContainer,
    paginationContainer,
    leafContainer,
    eventsContainer,
  } = styles;

  const handlePageClick = (e) => {
    const pageNumber = e.selected;
    setStartOffset(contentsPerPage * pageNumber);
    setEndOffset(contentsPerPage * pageNumber + contentsPerPage);
    setCurrentPage(pageNumber + 1);
    document.getElementById("events-section").scrollIntoView();
  };

  return (
    <div className={pastEventBody}>
      <div className={layoutContainer}>
        <LeftLayout />
      </div>
      <div className={eventsContainer} id="events-section">
        <BreadCrumb />
        {pastEventsYearWise
          .reverse()
          .slice(startOffset, endOffset)
          .map(({ year, data: events }, index) => {
            return (
              <div className={`${pastEvents} container-layout`} key={index}>
                <h1>{year}</h1>
                <div className={sliderContainer}>
                  <Sliders cardType="events" sliderData={events} />
                </div>
              </div>
            );
          })}
      </div>

      <div className={paginationContainer}>
        <Pagination
          length={pastEventsYearWise.length}
          contentsPerPage={3}
          onPageChange={handlePageClick}
          currentPage={currentPage}
        />
      </div>
      <div className={leafContainer}>
        <Layout />
      </div>
    </div>
  );
};

export default SocialBusinessPastEventsBody;

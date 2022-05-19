import React, { useState, useEffect } from "react";
import AwardsCard from "../../Shared/AwardsCard/AwardsCard";

import styles from "./awards.module.scss";
import NextButton from "./NextButton/NextButton";
import { animated, useTransition } from "@react-spring/web";

const Awards = ({ awardsData }) => {
  const { awardsContainer, grid, title, subtitle, nextButton, prevButton } = styles;
  const [numberOfData, setNumberOfData] = useState(8);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(numberOfData);
  // State value to hold the value of the current screen size
  // Set the screen-width to window's inner width if we are on the client side
  // In SSR we do not have a window on the server side,so we need to check if we are on the client side
  // as we set the screen width to window.innerWidth by putting a condition (typeof window !== 'undefined')
  const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" && window.innerWidth);

  // Show The Next Slide
  const next = () => {
    if (endIndex < awardsData.length) {
      setStartIndex(endIndex);
      setEndIndex((prev) => prev + numberOfData);
      return;
    }

    setStartIndex(0);
    setEndIndex(numberOfData);
  };
  // Show the prev slide
  const prev = () => {
    if (startIndex === 0) {
      setStartIndex(awardsData.length - numberOfData);
      setEndIndex(awardsData.length);
      return;
    }
    setStartIndex((prev) => prev - numberOfData);
    setEndIndex(startIndex);
  };

  // keep the cards open on mobile screens
  const reduceNumberOfCardsOnMobile = (screenWidth) => {
    console.log(screenWidth);
    // for mobile screens less than 700px width
    if (screenWidth <= 800 && screenWidth !== null) {
      setNumberOfData(4);
    } else {
      setNumberOfData(8);
    }
  };

  // Get screen size
  useEffect(() => {
    // Set the screen size to screen width state on change
    const onWidthChange = () => {
      setScreenWidth(window.innerWidth);
    };
    reduceNumberOfCardsOnMobile(screenWidth);
    // Add event listener to listen to screen width changes
    window.addEventListener("resize", onWidthChange);
    return () => window.removeEventListener("resize", onWidthChange); // removes the event listener
  }, [screenWidth]);

  return (
    <div className={awardsContainer}>
      <h2 className={title}>Awards</h2>
      <p className={subtitle}>Received by Professor Muhammad Yunus</p>
      <div className={grid}>
        <NextButton onClick={prev} className={prevButton} />
        {awardsData
          .filter((data, index) => {
            return index >= startIndex && index < endIndex;
          })
          .map(({ id, thumb_image, title, year }, index) => {
            return <AwardsCard image={thumb_image} title={title} year={year} key={id} i={index} />;
          })}
        <NextButton onClick={next} className={nextButton} />
      </div>
    </div>
  );
};

export default Awards;

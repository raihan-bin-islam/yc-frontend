import React, { useState } from "react";
import AwardsCard from "../../Shared/AwardsCard/AwardsCard";

import { awardsData } from "./awardsData";

import styles from "./awards.module.scss";
import NextButton from "./NextButton/NextButton";

const Awards = () => {
  const { awardsContainer, grid, title, subtitle, nextButton, prevButton } = styles;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(8);

  const next = () => {
    if (endIndex < awardsData.length) {
      setStartIndex(endIndex);
      setEndIndex((prev) => prev + 8);
      return;
    }
    setStartIndex(0);
    setEndIndex(8);
  };
  const prev = () => {
    if (startIndex === 0) {
      setStartIndex(awardsData.length - 8);
      setEndIndex(awardsData.length);
      return;
    }
    setStartIndex((prev) => prev - 8);
    setEndIndex(startIndex);
  };

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
          .map(({ id, image, title, year }, index) => {
            return <AwardsCard image={image} title={title} year={year} key={id} i={index} />;
          })}
        <NextButton onClick={next} className={nextButton} />
      </div>
    </div>
  );
};

export default Awards;

import React, { useState } from "react";
import AwardsCard from "../../Shared/AwardsCard/AwardsCard";

import { awardsData } from "./awardsData";

import styles from "./awards.module.scss";
import NextButton from "./NextButton/NextButton";

const Awards = () => {
  const { awardsContainer, grid, title, subtitle, nextButton, prevButton, awardAnimation } = styles;
  const [animateAwards, setAnimateAwards] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(8);

  return (
    <div className={awardsContainer}>
      <h2 className={title}>Awards</h2>
      <p className={subtitle}>Received by Professor Muhammad Yunus</p>
      <div className={grid}>
        <NextButton
          onClick={() => {
            setAnimateAwards("animateAwards");
          }}
          className={prevButton}
        />
        {awardsData
          .filter((data, index) => {
            return index >= startIndex && index < endIndex;
          })
          .map(({ image, title, year }, index) => {
            return <AwardsCard className={animateAwards} image={image} title={title} year={year} key={index} />;
          })}
        <NextButton
          onClick={() => {
            setAnimateAwards(awardAnimation);
            if (endIndex < awardsData.length) {
              setStartIndex(endIndex);
              setEndIndex((prev) => prev + 8);
            } else {
              setStartIndex(0);
              setEndIndex(8);
            }
          }}
          className={nextButton}
        />
      </div>
    </div>
  );
};

export default Awards;

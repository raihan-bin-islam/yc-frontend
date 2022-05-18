import React, { useState, useEffect } from "react";
import AwardsCard from "../../Shared/AwardsCard/AwardsCard";

// import { awardsData } from "./awardsData";

import styles from "./awards.module.scss";
import NextButton from "./NextButton/NextButton";
import { animated, useTransition } from "@react-spring/web";

const Awards = ({ awardsData }) => {
  const { awardsContainer, grid, title, subtitle, nextButton, prevButton } = styles;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(8);
  // const [animate, setAnimate] = useState(false);

  // ************ //
  // const tempData = awardsData.filter((data, index) => {
  //   return index >= startIndex && index < endIndex;
  // });

  // const [contents, setContents] = useState(tempData);

  // ************** //

  // const transitions = useTransition(
  //   contents.map((data) => ({ ...data, y: 0 })),
  //   {
  //     key: (item) => item.id,
  //     from: { height: 0, opacity: 0 },
  //     leave: { height: 0, opacity: 0 },
  //     enter: ({ y }) => ({ y, opacity: 1 }),
  //     update: ({ y }) => ({ y }),
  //   }
  // );

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
        {/* {transitions((style, item, t, index) => {
          console.log(item);
          <AwardsCard image={item.image} title={item.title} year={item.year} key={item.id} i={index} style={style} />;
        })} */}
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

import React from "react";
import styles from "./highlight.module.scss";

import Link from "next/link";

const Highlight = ({ image, description }) => {
  const { highlightContainer, imgContainer, desc } = styles;
  return (
    <Link href="#">
      <div className={highlightContainer}>
        <div className={imgContainer}>
          <img src={image} alt="highlight image" />
        </div>
        <p className={desc}>{description}</p>
      </div>
    </Link>
  );
};

export default Highlight;

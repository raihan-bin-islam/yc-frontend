import React from "react";
import Image from "next/image";
import { highlights } from "./data";
import styles from "./highlight.module.scss";

const Highlight = () => {
  const { highlightContainer, imgContainer, desc } = styles;
  const { image, description } = highlights;
  return (
    <div className={highlightContainer}>
      <div className={imgContainer}>
        <Image src={image} alt="highlight image" width={113} height={113} objectFit="cover" />
      </div>
      <p className={desc}>{description}</p>
    </div>
  );
};

export default Highlight;

import React from "react";
import Image from "next/image";
import styles from "./highlight.module.scss";

const Highlight = ({image, description}) => {
  const { highlightContainer, imgContainer, desc } = styles;
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

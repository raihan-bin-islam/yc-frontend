import React from "react";
import Image from "next/image";
import { highlights } from "./data";
import styles from "./highlight.module.scss";

const Highlight = () => {
  const { desc } = styles;
  const { image, description } = highlights;
  return (
    <div>
      <Image src={image} alt="highlight image" width={113} height={113} objectFit="contain" />
      <p className={desc}>{description}</p>
    </div>
  );
};

export default Highlight;

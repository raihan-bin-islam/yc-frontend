import React from "react";
import styles from "./highlight.module.scss";

import Link from "next/link";

const Highlight = ({ id, image, description }) => {
  const { highlightContainer, imgContainer, desc } = styles;

  const titledUrl = description.toLowerCase().replace(/\s+/g, "-").trim();

  return (
    <Link href={`/media/news/${id}/${titledUrl}`} passHref>
      <a className={highlightContainer}>
        <div className={highlightContainer}>
          <div className={imgContainer}>
            <img src={image} alt="highlight image" />
          </div>
          <p className={desc}>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Highlight;

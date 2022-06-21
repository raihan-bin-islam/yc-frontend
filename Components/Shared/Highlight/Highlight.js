import React from "react";
import styles from "./highlight.module.scss";

import Link from "next/link";

import useScrollReveal from "../../Hooks/useScrollReveal";

const Highlight = ({ id, image, description }) => {
  const { highlightContainer, imgContainer, desc } = styles;

  const titledUrl = description.toLowerCase().replace(/\s+/g, "-").trim();

  const { revealFromRight } = useScrollReveal("highlight-component");

  return (
    <Link href={`/media/news/${id}`} passHref>
      <a className={highlightContainer}>
        <div className={`${highlightContainer} ${revealFromRight}`}>
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

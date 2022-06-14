import React from "react";

import Link from "next/link";

// Styles
import {
  cardContainer,
  highlightCard,
  highlightNewsContainer,
  news,
  publisher,
  buttonComponent,
} from "./newsHighlightCard.module.scss";

import ButtonLight from "../../Shared/Button/Button";

const NewsHighlightCard = ({ id, image, title, publishedBy, pressRelease, newsContent }) => {
  // slice the news description
  const newsSliced = newsContent.slice(0, 300);
  // add ellipsis after 300 characters
  const newsDataWithEllipsis = newsSliced.concat("...");

  // converts the title into url link
  const titledUrl = title.toLowerCase().replace(/\s+/g, "-").trim();

  return (
    <div className={`${cardContainer}`}>
      <img src={image} alt="" />
      <div className={highlightNewsContainer}>
        <h2>{title}</h2>
        <div>
          <p className={`${publisher}`}>{publishedBy}</p>
          <p className={`${publisher}`}>{pressRelease}</p>
        </div>
        <p className={news} dangerouslySetInnerHTML={{ __html: newsDataWithEllipsis }}></p>
        <div className={buttonComponent}>
          <Link href={`/media/news/${id}`} passHref>
            <a>
              <ButtonLight text="Read More" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsHighlightCard;

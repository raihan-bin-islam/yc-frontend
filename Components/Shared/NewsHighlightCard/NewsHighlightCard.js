import React from "react";
import {
  cardContainer,
  highlightCard,
  highlightNewsContainer,
  news,
  publisher,
  buttonComponent,
} from "./newsHighlightCard.module.scss";

import ButtonLight from "../../Shared/Button/Button";

const NewsHighlightCard = ({ image, title, publishedBy, pressRelease, newsContent }) => {
  // slice the news description
  const newsSliced = newsContent.slice(0, 300);
  const newsDataWithEllipsis = newsSliced.concat("...");

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
          <ButtonLight text="Read More" />
        </div>
      </div>
    </div>
  );
};

export default NewsHighlightCard;

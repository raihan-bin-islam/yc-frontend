import React from "react";
import {
  cardContainer,
  highlightCard,
  highlightNewsContainer,
  news,
  publisher,
  buttonComponent,
} from "./recentNewsCard.module.scss";

import ButtonLight from "../../Shared/Button/Button";

const RecentNewsCard = ({ image, title, publishedBy, pressRelease, newsContent, highlight }) => {
  // slice the news description
  const newsSliced = newsContent.slice(0, 300);
  const newsDataWithEllipsis = newsSliced.concat("...");

  return (
    <div className={`${cardContainer} ${highlight && highlightCard}`}>
      <img className="slider-arrow" src={image} alt="" />
      <div className={highlightNewsContainer}>
        <h2>{title}</h2>
        <div>
          <p className={`${highlight && publisher}`}>{publishedBy}</p>
          <p className={`${highlight && publisher}`}>{pressRelease}</p>
        </div>
        {highlight && <p className={news} dangerouslySetInnerHTML={{ __html: newsDataWithEllipsis }}></p>}
      </div>
      <div className={buttonComponent}>
        <ButtonLight text="Read More" />
      </div>
    </div>
  );
};

export default RecentNewsCard;

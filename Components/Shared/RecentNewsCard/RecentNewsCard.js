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
import Link from "next/link";

const RecentNewsCard = ({ id, image, title, publishedBy, pressRelease, newsContent, highlight }) => {
  // slice the news description
  const newsSliced = newsContent.slice(0, 300);
  // add ellipsis after 300 characters
  const newsDataWithEllipsis = newsSliced.concat("...");

  // converts the title into url link
  const titledUrl = title.toLowerCase().replace(/\s+/g, "-").trim();

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
        <Link href={`/media/news/${id}/${titledUrl}`} passHref>
          <a>
            <ButtonLight text="Read More" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RecentNewsCard;

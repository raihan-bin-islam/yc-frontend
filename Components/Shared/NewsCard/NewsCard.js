import React from "react";
import styles from "./news_card.module.scss";
import Image from "next/dist/client/image";
import { newsComponentData } from "./data";
import Link from "next/link";

const NewsCard = ({ heading, publisher, pressRelease, news, altText, image, featured }) => {
  //classnames
  const {
    container,
    newsCardImg,
    imageAlt,
    newsHeading,
    newsPublisher,
    newsParagraph,
    button,
    readMore,
    featuredContainer,
  } = styles;
  const newsSliced = news.slice(0, 600);
  const newsDataWithEllipsis = newsSliced.concat("...");
  // data
  //const { image, altText, heading, publisher, pressRelease, news } = newsComponentData;

  return (
    <div className={`${container} ${featured && featuredContainer}`}>
      <img className={newsCardImg} src={image} alt={altText} />
      <p className={imageAlt}>
        {altText.slice(0, 160)}
        {altText.length > 160 && <span>...</span>}
      </p>
      <h3 className={newsHeading}>{heading}</h3>
      <span className={newsPublisher}>{publisher}</span> <span className={newsPublisher}>{pressRelease}</span>
      <p className={newsParagraph} dangerouslySetInnerHTML={{ __html: newsDataWithEllipsis }}></p>
      <div className={button}>
        <Link href="#" passHref>
          <a>
            <button className={readMore}>Read More</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;

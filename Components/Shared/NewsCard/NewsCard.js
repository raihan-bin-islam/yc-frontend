import React from "react";
import styles from "./news_card.module.scss";
import Image from "next/dist/client/image";
import { newsComponentData } from "./data";
import Link from "next/link";

const NewsCard = () => {
  const { container, imageAlt, newsHeading, newsPublisher, newsParagraph, button, readMore } = styles;
  const { image, altText, heading, publisher, pressRelease, news } = newsComponentData;
  return (
    <div className={container}>
      <Image src={image} alt={altText} width={546} height={399} />
      <p className={imageAlt}>{altText}</p>
      <h3 className={newsHeading}>{heading}</h3>
      <span className={newsPublisher}>{publisher}</span> <span className={newsPublisher}>{pressRelease}</span>
      <p className={newsParagraph}>{news}</p>
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

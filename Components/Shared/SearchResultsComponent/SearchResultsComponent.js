import React from "react";
import { container, resultTitle } from "./searchResultsComponent.module.scss";

import altImageSmall from "../../../public/assets/images/media/news-and-highlights/news_alt_image_small.jpg";
import Link from "next/link";

const SearchResultsComponent = ({ id, image, title, type }) => {
  const url = type === "news" ? "/media/news/" : type === "events" ? "/social-business/events" : "/";
  return (
    <Link href={`${url}${id ? id : ""}`}>
      <a>
        <div className={container}>
          <img
            src={image?.includes(undefined) ? altImageSmall.src : image === undefined ? altImageSmall.src : image}
            alt=""
          />
          <h2 className={resultTitle}>{title}</h2>
        </div>
      </a>
    </Link>
  );
};

export default SearchResultsComponent;

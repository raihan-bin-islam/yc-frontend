import React from "react";
import styles from "./highlight.module.scss";

import Link from "next/link";

import useScrollReveal from "../../Hooks/useScrollReveal";
import { useRouter } from "next/router";

import altImageSmall from "../../../public/assets/images/media/news-and-highlights/news_alt_image_small.jpg";

const Highlight = ({ id, image, description }) => {
  // const altImage =
  const { highlightContainer, imgContainer, desc } = styles;
  const router = useRouter();
  const getRoute = () => {
    let route = "";
    router.pathname.includes("news")
      ? (route = "/media/news/")
      : router.pathname.includes("press-release")
      ? (route = "/media/press-release/")
      : (route = "/media/rejoinders/");

    return route;
  };

  const titledUrl = description.toLowerCase().replace(/\s+/g, "-").trim();

  const { revealFromRight } = useScrollReveal("highlight-component");

  return (
    <Link href={getRoute() + `${id}`} passHref>
      <a className={highlightContainer}>
        <div className={`${highlightContainer} ${revealFromRight}`}>
          <div className={imgContainer}>
            <img src={image.includes(undefined) ? altImageSmall.src : image} alt="highlight image" />
          </div>
          <p className={desc}>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Highlight;

import React from "react";
import useFetch from "../../../Hooks/useFetch";
import ButtonLight from "../../../Shared/Button/Button";
import Highlight from "../../../Shared/Highlight/Highlight";
import NewsCard from "../../../Shared/NewsCard/NewsCard";
import RecentNewsCard from "../../../Shared/RecentNewsCard/RecentNewsCard";
import {
  featuredSection,
  featuredContainer,
  highlightsContainer,
  libraryContainer,
  newsLibrary,
  buttonComponent,
  titleOne,
  titleTwo,
} from "./featured.module.scss";

const Featured = () => {
  const [newsIsLoading, newsData] = useFetch("/news");
  return (
    <section className={featuredSection}>
      <div>
        <h2 className={titleOne}>Featured</h2>
        <div className={featuredContainer}>
          {newsData.length && (
            <NewsCard
              key={newsData[0].id}
              heading={newsData[0].title}
              publisher="Published by Yunus Centre"
              pressRelease={newsData[0].published_at}
              news={newsData[0].desc}
              image={newsData[0].thumb_image}
              altText={newsData[0].image_caption}
              featured
            />
          )}
        </div>

        <h2 className={titleOne}>Highlights</h2>
        <div className={highlightsContainer}>
          <RecentNewsCard highlight />
          <span></span>
          <RecentNewsCard highlight />
        </div>
      </div>
      <div className={libraryContainer}>
        <h2 className={titleTwo}>News Library</h2>
        <div className={newsLibrary}>
          {newsData.length && (
            <>
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
              <Highlight image={newsData[0].thumb_image} description={newsData[0].title} />
            </>
          )}
        </div>
        <div className={buttonComponent}>
          <ButtonLight text="see more" />
        </div>
      </div>
    </section>
  );
};

export default Featured;

import React from "react";
// Component
import ButtonLight from "../../../Shared/Button/Button";
import Highlight from "../../../Shared/Highlight/Highlight";
import NewsCard from "../../../Shared/NewsCard/NewsCard";
import NewsHighlightCard from "../../../Shared/NewsHighlightCard/NewsHighlightCard";
import Sliders from "../../../Shared/Slider/Slider";

import {
  featuredSection,
  featuredContainer,
  highlightsContainer,
  libraryContainer,
  newsLibrary,
  buttonComponent,
  titleOne,
  titleTwo,
  recentNewsSection,
  recentNewsTitle,
} from "./featured.module.scss";

const Featured = ({ newsData }) => {
  return (
    <>
      <section className={featuredSection}>
        <div>
          <h2 className={titleOne}>Featured</h2>
          <div className={featuredContainer}>
            {newsData.length > 0 && (
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
            {newsData.length > 2 && (
              <>
                <NewsHighlightCard
                  image={newsData[0].thumb_image}
                  title={newsData[0].title}
                  publishedBy="Published by Yunus Centre"
                  pressRelease={newsData[0].published_at}
                  newsContent={newsData[0].desc}
                />
                <span></span>
                <NewsHighlightCard
                  image={newsData[1].thumb_image}
                  title={newsData[1].title}
                  publishedBy="Published by Yunus Centre"
                  pressRelease={newsData[1].published_at}
                  newsContent={newsData[1].desc}
                />
              </>
            )}
          </div>
        </div>
        <div className={libraryContainer}>
          <h2 className={titleTwo}>News Library</h2>
          <div className={newsLibrary}>
            {newsData.length > 0 &&
              newsData
                .filter(({ is_highlight }, index) => is_highlight && index < 20)
                .map(({ id, thumb_image, title }) => {
                  return <Highlight key={id} image={thumb_image} description={title} />;
                })}
          </div>
          <div className={buttonComponent}>
            <ButtonLight text="see more" />
          </div>
        </div>
      </section>
      <section className={recentNewsSection}>
        <h2 className={recentNewsTitle}>Recent News</h2>
        <Sliders cardType="newsCard" sliderData={newsData} />
      </section>
    </>
  );
};

export default Featured;

import React from "react";
import Highlight from "../../Shared/Highlight/Highlight";
import NewsCard from "../../Shared/NewsCard/NewsCard";
import styles from "./homenews.module.scss";
import articleImg from "../../../public/assets/images/landing_page/highlight-img.png";

import PreLoader from "../../Shared/PreLoader/PreLoader";
import ButtonLight from "../../Shared/Button/Button";
import Link from "next/link";
import useScrollReveal from "../../Hooks/useScrollReveal";

const HomeNews = ({ isLoading, newsData }) => {
  // Module Style Object Destructuring
  const { homeNewsContainer, homeNewsContainerBody, asideHeader, asideContent, highlightButton } = styles;

  // Scroll Reveal
  const { scaleUp } = useScrollReveal("home__news_news-card");

  // Set highlights from all the news data
  const highlights =
    newsData &&
    newsData.filter(({ is_highlight }) => {
      return is_highlight;
    });

  return (
    <section className={homeNewsContainer}>
      <div className={`container-layout ${homeNewsContainerBody}`}>
        <main>
          {!isLoading ? (
            newsData &&
            newsData
              .filter((data, index) => {
                return index < 2;
              })
              .map(({ id, title, desc, image_caption, thumb_image, published_at }) => {
                return (
                  <div key={id} className={scaleUp}>
                    <NewsCard
                      id={id}
                      heading={title}
                      publisher="Published by Yunus Centre"
                      pressRelease={published_at}
                      news={desc}
                      image={thumb_image}
                      altText={image_caption}
                    />
                  </div>
                );
              })
          ) : (
            <PreLoader />
          )}
        </main>
        <aside>
          <h2 className={asideHeader}>highlights</h2>
          <div className={asideContent}>
            {!isLoading ? (
              newsData &&
              newsData
                .filter(({ is_highlight }, index) => {
                  return is_highlight;
                })
                .map(({ id, title, thumb_image }) => {
                  return <Highlight key={id} id={id} image={thumb_image} description={title} />;
                })
            ) : (
              <PreLoader />
            )}
          </div>
          <div className={highlightButton}>
            <Link href="/media/news/news-library" passHref>
              <a>
                <ButtonLight text="See All" />
              </a>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HomeNews;

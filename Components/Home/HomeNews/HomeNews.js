import React from "react";
import Highlight from "../../Shared/Highlight/Highlight";
import NewsCard from "../../Shared/NewsCard/NewsCard";
import styles from "./homenews.module.scss";
import articleImg from "../../../public/assets/images/landing_page/highlight-img.png";
import useFetch from "../../Hooks/useFetch";
import PreLoader from "../../Shared/PreLoader/PreLoader";

const HomeNews = () => {
  const { homeNewsContainer, homeNewsContainerBody, asideHeader, asideContent } = styles;
  const [isPending, newsData] = useFetch("/news");
  // set highlights from all the news data
  const highlights =
    newsData &&
    newsData.filter(({ is_highlight }) => {
      return is_highlight;
    });

  return (
    <section className={homeNewsContainer}>
      <div className={`container-layout ${homeNewsContainerBody}`}>
        <main>
          {!isPending ? (
            newsData.map(({ id, title, desc, image_caption, thumb_image, published_at }) => {
              return (
                <NewsCard
                  key={id}
                  heading={title}
                  publisher="Published by Yunus Centre"
                  pressRelease={published_at}
                  news={desc}
                  image={thumb_image}
                  altText={image_caption}
                />
              );
            })
          ) : (
            <PreLoader />
          )}
        </main>
        <aside>
          <h2 className={asideHeader}>highlights</h2>
          <div className={asideContent}>
            <Highlight
              image={articleImg.src}
              description="Innovate together to achieve sdgs & climate actions through social business"
            />
            <Highlight
              image={articleImg.src}
              description="Innovate together to achieve sdgs & climate actions through social business"
            />
            <Highlight
              image={articleImg.src}
              description="Innovate together to achieve sdgs & climate actions through social business"
            />
            <Highlight
              image={articleImg.src}
              description="Innovate together to achieve sdgs & climate actions through social business"
            />
            <Highlight
              image={articleImg.src}
              description="Innovate together to achieve sdgs & climate actions through social business"
            />
            <Highlight
              image={articleImg.src}
              description="Innovate together to achieve sdgs & climate actions through social business"
            />
            <Highlight
              image={articleImg.src}
              description="Innovate together to achieve sdgs & climate actions through social business"
            />
            <Highlight
              image={articleImg.src}
              description="Innovate together to achieve sdgs & climate actions through social business"
            />
            <Highlight
              image={articleImg.src}
              description="Innovate together to achieve sdgs & climate actions through social business"
            />
            <Highlight
              image={articleImg.src}
              description="Innovate together to achieve sdgs & climate actions through social business"
            />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HomeNews;

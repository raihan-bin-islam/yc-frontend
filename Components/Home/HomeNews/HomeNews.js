import React from "react";
import Highlight from "../../Shared/Highlight/Highlight";
import NewsCard from "../../Shared/NewsCard/NewsCard";
import styles from "./homenews.module.scss";
import post1 from "../../../public/assets/images/landing_page/post-1.png";
import post2 from "../../../public/assets/images/landing_page/post-2.jpg";
import articleImg from "../../../public/assets/images/landing_page/highlight-img.png";
import Heading from "../../Shared/Heading/Heading";

const HomeNews = () => {
  const { homeNewsContainer, homeNewsContainerBody, asideHeader, asideContent } = styles;

  return (
    <section className={homeNewsContainer}>
      <div className={`container-layout ${homeNewsContainerBody}`}>
        <main>
          <NewsCard
            heading="Mahathir Mohammad Invites Professor Muhammad Yunus for a Discussion"
            publisher="Published by Yunus Centre"
            pressRelease="Press Release (March 30, 2022)"
            news="Nobel Laureate Professor Muhammad Yunus was invited by former prime minister of Malaysia Dr Mahathir Mohammad (96)  to meet him and his wife Siti Hasma (95) while he was visiting Malaysia to discuss the progress of his work in Malaysia and in other countries. Professor Yunus was visiting Malaysia to attend the inaugural convocation ceremony of Al Bukhary International University (AIU) in Alor Setar, Kedah on March 26, 2022. Professor Yunus is the founding Chancellor of the AIU.  He met Dr Mahathir and his wife Dr Siti Hasma in his office in Kuala Lumpur on March 28.  Both have been long time…"
            image={post1.src}
            altText="Nobel Peace laureate Professor Muhammad Yunus and Mahathir Mohammad"
          />
          <NewsCard
            heading="Tenth one young world summit held in London - Professor Muhammad Yunus urged youth to reversing the environmental degradation and wealth concentration"
            publisher="Published by Yunus Centre"
            pressRelease="Press Release (October 29, 2019)"
            news="The 10th One Young World Summit took place in London this year from October 22 to 25, 2019. One Young World is a leading forum for youth which annually brings together over 2000 young leaders and change makers from over 190 countries to interact with Counsellors who are prominent persons from around the globe, as a way to accelerate…"
            image={post2.src}
            altText="Nobel Peace laureate Professor Muhammad Yunus and Her Royal Highness Meghan Markle"
          />
        </main>
        <aside>
          <div className={asideHeader}>
            <Heading text="highlights" size="small" />
          </div>
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

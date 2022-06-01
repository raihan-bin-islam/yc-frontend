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

const RecentNewsCard = ({ highlight }) => {
  return (
    <div className={`${cardContainer} ${highlight && highlightCard}`}>
      <img src="/assets/images/media/news-and-highlights/recent-news-thumb.png" alt="" />
      <div className={highlightNewsContainer}>
        <h2>Mahathir Mohammad Invites Professor Muhammad Yunus for a Discussion</h2>
        <div>
          <p className={`${highlight && publisher}`}>Published by Yunus Centre</p>
          <p className={`${highlight && publisher}`}>Press Release (March 30, 2022)</p>
        </div>
        {highlight && (
          <p className={news}>
            Nobel Laureate Professor Muhammad Yunus was invited by former prime minister of Malaysia Dr Mahathir
            Mohammad (96) to meet him and his wife Siti Hasma (95) while he was visiting Malaysia to discuss the
            progress of his work in Malaysia and in other countries. Professor Yunus was visiting Malaysia to attend the
            inaugural convocation ceremony of Al Bukhary International University (AIU) in Alor Setar, Kedah on March
            26, 2022.
          </p>
        )}
        <div className={buttonComponent}>
          <ButtonLight text="See More" />
        </div>
      </div>
    </div>
  );
};

export default RecentNewsCard;

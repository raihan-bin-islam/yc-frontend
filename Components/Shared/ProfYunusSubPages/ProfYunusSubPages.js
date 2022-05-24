import React from "react";
// Import styles from scss
import {
  pageSection,
  pageLayout,
  pageContent,
  titleContainer,
  profYunusName,
  pageTitle,
  titleHeading,
  desc,
  scrollableDesc,
  yunusImage,
} from "./profYunusSubPages.module.scss";

// Import Component
import Button from "../Button/Button";
import HeroBanner from "../HeroBanner/HeroBanner";

import Link from "next/link";

const ProfYunusSubPages = ({ heading, name, title, description, wishlist }) => {
  return (
    <section className={pageSection}>
      <HeroBanner flipped />
      <div className={titleContainer}>
        {!heading && <p className={profYunusName}>{name}</p>}
        <h2 className={`${pageTitle} ${heading && titleHeading}`}>{title}</h2>
      </div>
      <div className={pageLayout}>
        <div className={pageContent}>
          <div className={`${desc} ${wishlist && scrollableDesc}`}>
            {description &&
              description.map((data, index) => {
                return (
                  <div key={index}>
                    <p>
                      {data}
                      <br />
                      <br />
                    </p>
                    <br />
                  </div>
                );
              })}
          </div>

          <a href="/professor-yunus">
            <Button text="Back" />
          </a>
        </div>

        <div className={yunusImage}>
          <img src="/assets/images/prof_yunus/subPage/profYunusTemplate.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ProfYunusSubPages;

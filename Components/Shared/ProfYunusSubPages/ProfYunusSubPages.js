import React from "react";
// Import styles from scss
import {
  pageLayout,
  pageContent,
  titleContainer,
  profYunusName,
  pageTitle,
  titleHeading,
  desc,
  quotation,
  yunusImage,
} from "./profYunusSubPages.module.scss";

// Import Component
import Button from "../Button/Button";
import HeroBanner from "../HeroBanner/HeroBanner";
import QuotationSvg from "./QuotationSvg";

const ProfYunusSubPages = ({ heading, name, title, description, quotes }) => {
  return (
    <section className={pageLayout}>
      <HeroBanner flipped />
      <div className={pageContent}>
        <div className={titleContainer}>
          {!heading && <p className={profYunusName}>{name}</p>}
          <h2 className={`${pageTitle} ${heading && titleHeading}`}>{title}</h2>
        </div>

        <div className={desc}>
          {description &&
            description.map((data, index) => {
              return (
                <div key={index}>
                  <p className={quotes && quotation}>
                    {/* if it is a quotation then wrap the text in a q tag or else don't */}
                    {quotes ? <q>{data}</q> : data}
                    <br />
                    <br />
                  </p>
                  {quotes && <QuotationSvg />}
                  <br />
                </div>
              );
            })}
        </div>

        <Button text="Back" />
      </div>

      <div className={yunusImage}>
        <img src="/assets/images/prof_yunus/subPage/profYunusTemplate.png" alt="" />
      </div>
    </section>
  );
};

export default ProfYunusSubPages;

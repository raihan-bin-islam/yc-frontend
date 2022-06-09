import React from "react";

// COMPONENTS
import HeroBannerSmall from "../../Shared/HeroBannerSmall/HeroBannerSmall";
import Button from "../../Shared/Button/Button";
import LeafSvg from "../../Shared/CommonSvg/LeafSvg";

// CSS
import styles from "./SingleRejoinder.module.scss";

const SingleRejoinder = () => {
  const {
    rejoinderContainer,
    rejoinderBody,
    rejoinderHeader,
    headingContainer,
    bodyContainer,
    box,
    layoutContainer,
  } = styles;

  return (
    <div className={rejoinderContainer}>
      <div className={rejoinderHeader}>
        <HeroBannerSmall />
      </div>
      <div className={`${rejoinderBody} container-layout`}>
        <div className={layoutContainer}>
          <LeafSvg />
        </div>

        <div className={headingContainer}>
          <h1>
            Rejoinder on Allegations Regarding Padma Bridge, Tax Evasion and
            Illegal Money Transfer Abroad​
          </h1>
          <div className={box}>
            <span>Response to Media</span>
            <span>Rejoinder (19 june, 2017)</span>
          </div>
        </div>
        <div className={bodyContainer}>
          <p>
            Honorable Prime Minister Sheikh Hasina, in a statement made in
            Sweden on 15 June at Stockholm City Conference Centre while
            addressing a reception accorded to her by expatriate Bangladeshis,
            made a number of accusations and allegations against Nobel Laureate
            Professor Muhammad Yunus including his alleged role “in stopping the
            World Bank fund for Padma Bridge project, instigating Ms Hilary
            Clinton to phone her after losing his Managing Director post from
            Grameen Bank, stealing money from Grameen Bank, not paying taxes,”
            among others.
          </p>
          <p>
            The government suspected that Professor Yunus may have undisclosed
            sources of income which he has kept in undeclared accounts in banks.
            The nation was told through press announcement that the government
            is making a world-wide and nation-wide search for his and his wife’s
            allegedly undeclared accounts. Every single branch of all banks in
            the country was made to report whether they had any bank account of
            Professor Yunus and his wife. The government does not appear to have
            found anything through this search. At least they have not told the
            nation that they have found anything.
          </p>
        </div>
        <div className={bodyContainer}>
          <Button text="Back" />
        </div>
      </div>
    </div>
  );
};

export default SingleRejoinder;

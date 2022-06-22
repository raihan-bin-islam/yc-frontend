import React from "react";

// COMPONENTS
import HeroBannerSmall from "../../Shared/HeroBannerSmall/HeroBannerSmall";
import Button from "../../Shared/Button/Button";
import LeafSvg from "../../Shared/CommonSvg/LeafSvg";

// CSS
import styles from "./SingleRejoinder.module.scss";
import { useRouter } from "next/router";

const SingleRejoinder = ({ rejoinder }) => {
  const { rejoinderContainer, rejoinderBody, rejoinderHeader, headingContainer, bodyContainer, box, layoutContainer } =
    styles;

  const router = useRouter();

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
          <h1>{rejoinder?.title}</h1>
          <div className={box}>
            <span>Response to Media</span>
            <span>Rejoinder (19 june, 2017)</span>
          </div>
        </div>
        <div className={bodyContainer}>
          <p dangerouslySetInnerHTML={{ __html: rejoinder?.desc }}></p>
        </div>
        <div onClick={() => router.back()} className={bodyContainer}>
          <Button text="Back" />
        </div>
      </div>
    </div>
  );
};

export default SingleRejoinder;

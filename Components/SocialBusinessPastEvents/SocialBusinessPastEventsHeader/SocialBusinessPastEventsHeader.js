import React from "react";

// COMPONENTS
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";
import HeroBannerSmall from "../../Shared/HeroBannerSmall/HeroBannerSmall";

// CSS
import styles from "./SocialBusinessPastEventsHeader.module.scss";

const SocialBusinessPastEventsHeader = () => {
  const { heroHeader } = styles;

  return (
    <div className={heroHeader}>
      <HeroBannerSmall title="past events" />
    </div>
  );
};

export default SocialBusinessPastEventsHeader;

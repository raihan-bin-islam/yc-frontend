import React from "react";

// COMPONENTS
import HeroBannerSmall from "../../Shared/HeroBanerSmall/HeroBannerSmall";

// CSS
import styles from "./SocialBusinessIssuesHeader.module.scss";

const SocialBusinessIssuesHeader = () => {
  const { heroHeader } = styles;

  return (
    <div className={heroHeader}>
      <HeroBannerSmall title="issues of social business" />
    </div>
  );
};

export default SocialBusinessIssuesHeader;

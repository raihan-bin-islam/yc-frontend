import React from "react";

// COMPONENTS
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

// CSS
import styles from "./SocialBusinessIssuesHeader.module.scss";

const SocialBusinessIssuesHeader = () => {
  const { heroHeader } = styles;

  return (
    <div className={heroHeader}>
      <HeroBanner />
      <h1>issues of social business</h1>
    </div>
  );
};

export default SocialBusinessIssuesHeader;

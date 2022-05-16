import React from "react";

// COMPONENTS
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

import styles from "./SocialBusinessConceptHeader.module.scss";

const SocialBusinessConceptHeader = () => {
  const { headerHero } = styles;

  return (
    <div className={headerHero}>
      <HeroBanner />
      <h1>concept of social business</h1>
    </div>
  );
};

export default SocialBusinessConceptHeader;

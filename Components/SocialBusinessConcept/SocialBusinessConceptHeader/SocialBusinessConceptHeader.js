import React from "react";

// COMPONENTS
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

import styles from "./SocialBusinessConceptHeader.module.scss";

const SocialBusinessConceptHeader = () => {
  const { headerHero } = styles;

  return (
    <div className={headerHero}>
      <HeroBanner />
    </div>
  );
};

export default SocialBusinessConceptHeader;

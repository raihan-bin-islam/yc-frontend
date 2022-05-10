import React from "react";

// COMPONENTS
import HeroBannerSmall from "../../Shared/HeroBannerSmall/HeroBannerSmall";

import styles from "./SocialBusinessConceptHeader.module.scss";

const SocialBusinessConceptHeader = () => {
  const { headerHero } = styles;

  return (
    <div className={headerHero}>
      <HeroBannerSmall />
    </div>
  );
};

export default SocialBusinessConceptHeader;

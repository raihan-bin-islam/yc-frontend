import React from "react";
import HeroBannerSmall from "../../Shared/HeroBanerSmall/HeroBannerSmall";

// COMPONENTS
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

import styles from "./SocialBusinessConceptHeader.module.scss";

const SocialBusinessConceptHeader = () => {
  const { headerHero } = styles;

  return (
    <div className={headerHero}>
      {/* <HeroBanner />
      <h1>concept of social business</h1> */}
      <HeroBannerSmall title="concept of social business" />
    </div>
  );
};

export default SocialBusinessConceptHeader;

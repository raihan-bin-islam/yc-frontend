import React from "react";

import styles from "./hero-banner-small.module.scss";

const HeroBannerSmall = () => {
  const { heroBanner } = styles;
  return (
    <div className={heroBanner}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1921.578"
        height="1002.968"
        viewBox="0 0 1921.578 1002.968"
      >
        <path
          id="Path_1"
          data-name="Path 1"
          d="M0-220.85.458,631.888s331.781,210.781,1020.286,133,900.833-54.4,900.833-54.4l-.927-931.338Z"
          transform="translate(0 220.85)"
          fill="#1c5991"
        />
      </svg>

      {/* <img className="animateBanner" src={heroLayer.src} alt="hero-banner" /> */}
    </div>
  );
};

export default HeroBannerSmall;

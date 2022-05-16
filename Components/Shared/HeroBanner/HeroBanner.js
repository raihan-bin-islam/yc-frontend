import React from "react";

import styles from "./hero-banner.module.scss";

const HeroBanner = ({ large }) => {
  const { heroBannerSmall, heroBannerLarge, svgSmall, svgLarge } = styles;
  return (
    <div className={large ? `${heroBannerLarge}` : `${heroBannerSmall}`}>
      {large ? (
        <svg
          className={svgLarge}
          xmlns="http://www.w3.org/2000/svg"
          width="1922.303"
          height="1041.683"
          viewBox="0 0 1922.303 1041.683"
        >
          <path
            id="Path_327"
            data-name="Path 327"
            d="M-21961-15399.344s38.008,166.6,996.469,92.1c950.461-73.075,925.773,79.128,925.773,79.128V-16269.8H-21961Z"
            transform="translate(21961 16269.797)"
            fill="#1c5991"
          />
        </svg>
      ) : (
        <svg
          className={svgSmall}
          xmlns="http://www.w3.org/2000/svg"
          width="1921.578"
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
      )}
    </div>
  );
};

export default HeroBanner;

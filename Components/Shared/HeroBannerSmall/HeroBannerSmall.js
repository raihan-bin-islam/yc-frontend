import React from "react";
import { bannerContainer, svgSmall, titleContainer, bannerTitle, bannerSubtitle } from "./heroBannerSmall.module.scss";

const HeroBannerSmall = ({ title, subtitle }) => {
  return (
    <div className={bannerContainer}>
      <svg className={svgSmall} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1010.85">
        <path
          id="Path_1"
          data-name="Path 1"
          d="M0-220.85.458,631.888s331.781,210.781,1020.286,133,900.833-54.4,900.833-54.4l-.927-931.338Z"
          transform="translate(0 220.85)"
          fill="#1c5991"
        />
      </svg>
      {title && (
        <div className={titleContainer}>
          <h2 className={bannerTitle}>{title}</h2>
          {subtitle && <h3 className={bannerSubtitle}>{subtitle}</h3>}
        </div>
      )}
    </div>
  );
};

export default HeroBannerSmall;

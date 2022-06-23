import React from "react";
import { ycLogoSvgContainer, mask } from "./ycLogo.module.scss";

const YCLogo = () => {
  return (
    <div id="yc_logo_svg" className={ycLogoSvgContainer}>
      <div className={mask}></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.469 94.16">
        <path
          id="Icon_simple-uikit"
          data-name="Icon simple-uikit"
          d="M52.28,10.2,39.549,17.911l14.68,8.353V48.191L34.508,59.153,15.119,48.191V31.2L2.394,24.65V55.769l31.661,18.59,32.808-18.59V18.6L52.28,10.2ZM29.426,19.9,17.094,12.768,4.243,20.725,16.735,27.6Z"
          transform="translate(-2.394 10)"
          fill="#828282"
        >
          <animate
            attributeName="d"
            begin="yc_logo_svg.mouseover"
            restart="always"
            from="M52.28,10.2,39.549,17.911l14.68,8.353V48.191L34.508,59.153,15.119,48.191V31.2L2.394,24.65V55.769l31.661,18.59,32.808-18.59V18.6L52.28,10.2ZM29.426,19.9,17.094,12.768,4.243,20.725,16.735,27.6Z"
            to="M52.28,10.2,39.549,17.911l14.68,8.353V48.191L34.508,59.153,15.119,48.191V31.2L2.394,24.65V55.769l31.661,18.59,32.808-18.59V18.6L52.28,10.2Zm-5.9-3.064L34.049,0,21.2,7.956,33.69,14.828,46.381,7.135Z"
            dur="0.2s"
            fill="freeze"
          />
          <animate
            attributeName="d"
            begin="yc_logo_svg.mouseout"
            restart="always"
            from="M52.28,10.2,39.549,17.911l14.68,8.353V48.191L34.508,59.153,15.119,48.191V31.2L2.394,24.65V55.769l31.661,18.59,32.808-18.59V18.6L52.28,10.2Zm-5.9-3.064L34.049,0,21.2,7.956,33.69,14.828,46.381,7.135Z"
            to="M52.28,10.2,39.549,17.911l14.68,8.353V48.191L34.508,59.153,15.119,48.191V31.2L2.394,24.65V55.769l31.661,18.59,32.808-18.59V18.6L52.28,10.2ZM29.426,19.9,17.094,12.768,4.243,20.725,16.735,27.6Z"
            dur="0.2s"
            fill="freeze"
          />

          <animateTransform
            attributeName="transform"
            begin="yc_logo_svg.mouseover"
            type="translate"
            from="-2.394 5"
            to="-2.394 10"
            dur="0.2s"
            fill="freeze"
          />
          <animateTransform
            attributeName="transform"
            begin="yc_logo_svg.mouseout"
            type="translate"
            from="-2.394 10"
            to="-2.394 5"
            dur="0.2s"
            fill="freeze"
          />
        </path>
      </svg>
    </div>
  );
};

export default YCLogo;

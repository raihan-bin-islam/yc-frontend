import React from "react";

const PlayButton = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 95">
      <g id="Group_177" data-name="Group 177" transform="translate(-0.159 -0.487)">
        <ellipse
          id="Ellipse_2"
          data-name="Ellipse 2"
          cx="48"
          cy="47.5"
          rx="48"
          ry="47.5"
          transform="translate(0.159 0.487)"
          fill="#fff"
          opacity="0.427"
        />
        <path
          id="Polygon_1"
          data-name="Polygon 1"
          d="M21.917,0,43.834,38.117H0Z"
          transform="translate(72.294 25.918) rotate(90)"
          fill="#2d2d2d"
        />
      </g>
    </svg>
  );
};

export default PlayButton;

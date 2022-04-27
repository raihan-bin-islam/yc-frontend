import React from "react";

const NextButton = ({ className, onClick }) => {
  return (
    <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 362">
      <rect id="Rectangle_152" data-name="Rectangle 152" width="37" height="362" fill="#c7c6c6" opacity="0.4" />
      <g id="Group_136" data-name="Group 136" transform="translate(-970.403 -6138.332)">
        <path
          id="Path_220"
          data-name="Path 220"
          d="M15.674,0,0,15.674,15.674,31.348"
          transform="translate(996.74 6333.006) rotate(180)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default NextButton;

import React from "react";
import styles from "./what_we_do_card.module.scss";
import Image from "next/dist/client/image";
import { data } from "./data";
import RightArrow from "./RightArrow";

const WhatWeDoCard = () => {
  const { container, imageDiv, image, overlay, heading, paragraph } = styles;

  return (
    <div className={container}>
      <div className={imageDiv}>
        <Image className={image} src={data.image} alt="what we do card image" width={520} height={427} />
        <p className={paragraph}>{data.paragraph}</p>
      </div>
      <h3 className={heading}>
        {data.heading} <RightArrow />
      </h3>
    </div>
  );
};

export default WhatWeDoCard;

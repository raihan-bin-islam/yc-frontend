import React from "react";
import styles from "./what_we_do_card.module.scss";
import Image from "next/dist/client/image";
import RightArrowLink from "../CommonSvg/RightArrowLink";

const WhatWeDoCard = ({ title, desc, photo }) => {
  const { container, imageDiv, image, heading, paragraph } = styles;

  return (
    <div className={container}>
      <div className={imageDiv}>
        <Image
          className={image}
          src={photo}
          alt="what we do card image"
          width={19200}
          height={"100%"}
          objectFit="cover"
        />
        <p className={paragraph}>{desc}</p>
      </div>
      <h3 className={heading}>
        {title} <RightArrowLink />
      </h3>
    </div>
  );
};

export default WhatWeDoCard;

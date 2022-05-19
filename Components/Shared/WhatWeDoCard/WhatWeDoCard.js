import React from "react";
import styles from "./what_we_do_card.module.scss";
import Image from "next/dist/client/image";
import RightArrowLink from "../CommonSvg/RightArrowLink";

import Link from "next/link";

const WhatWeDoCard = ({ title, desc, photo, link }) => {
  const { container, imageDiv, image, heading, paragraph } = styles;

  return (
    <Link href={link}>
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
    </Link>
  );
};

export default WhatWeDoCard;

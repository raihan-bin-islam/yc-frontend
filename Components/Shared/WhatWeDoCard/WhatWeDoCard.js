import React from "react";
import styles from "./what_we_do_card.module.scss";
import Image from "next/dist/client/image";
import RightArrowLink from "../CommonSvg/RightArrowLink";

import Link from "next/link";
import useScrollReveal from "../../Hooks/useScrollReveal";

const WhatWeDoCard = ({ title, desc, photo, link, hoverDisable }) => {
  const { container, imageDiv, image, heading, paragraph, disable } = styles;

  const { revealFromLeft } = useScrollReveal("home_what-we-do");

  return (
    <Link href={link} passHref>
      <div className={hoverDisable ? `${disable} ${container} ${revealFromLeft}` : `${container} ${revealFromLeft}`}>
        <div className={imageDiv}>
          <Image className={image} src={photo} alt="card image" width={19200} height={"100%"} objectFit="cover" />
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

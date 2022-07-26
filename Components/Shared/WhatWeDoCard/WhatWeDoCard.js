import React from "react";
import styles from "./what_we_do_card.module.scss";
import Image from "next/dist/client/image";
import RightArrowLink from "../CommonSvg/RightArrowLink";

import Link from "next/link";

const WhatWeDoCard = ({ title, desc, photo, link, hoverDisable, externalLink }) => {
  const { container, imageDiv, image, heading, paragraph, disable } = styles;

  // for next image we need to split the link and remove the base url since next image loader automatically adds it to the relative path
  if (photo.includes("http://ycadmin.yyventures.org")) {
    photo = photo.replace("http", "https");
  }

  return (
    <Link href={link} passHref={true}>
      <a target={externalLink && "__blank"}>
        <div className={hoverDisable ? `${disable} ${container} ` : `${container} `}>
          <div className={imageDiv}>
            <Image className={image} src={photo} alt="card image" width={19200} height={"100%"} objectFit="cover" />
            <p className={paragraph}>{desc}</p>
          </div>
          <h3 className={heading}>
            {title} <RightArrowLink />
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default WhatWeDoCard;

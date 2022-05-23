import React from "react";

// CSS
import styles from "./TrusteeCard.module.scss";

const TrusteeCard = ({ image, title, desc1, desc2, designation }) => {
  const {
    aboutTrusteesCard,
    aboutTrusteesCardBack,
    aboutTrusteesCardFront,
    aboutTrusteesCardFrontTop,
    aboutTrusteesCardFrontBottom,
    aboutTrusteesCardFrontBottomContainer,
  } = styles;

  return (
    <div className={aboutTrusteesCard}>
      <div className={aboutTrusteesCardBack}>
        <img src={image} alt={title} />
      </div>
      <div className={aboutTrusteesCardFront}>
        <div className={aboutTrusteesCardFrontTop}>
          <p>{desc1}</p>
          <p>{desc2}</p>
        </div>
        <div className={aboutTrusteesCardFrontBottom}>
          <div className={aboutTrusteesCardFrontBottomContainer}>
            <h5>{designation}</h5>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrusteeCard;

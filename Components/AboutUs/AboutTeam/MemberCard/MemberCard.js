import React from "react";

import IconLinkedIn from "../../../../public/linked_in.svg";

// CSS
import styles from "./MemberCard.module.scss";

const MemberCard = ({ image, title, designation, linkedIn }) => {
  const {
    aboutTeamBodyCard,
    aboutTeamBodyCardImg,
    aboutTeamBodyCardContent,
    aboutTeamBodyCardContentContainer,
    aboutTeamBodyCardLinkedIn,
  } = styles;

  // console.log(title);
  // console.log(designation);

  return (
    <div className={aboutTeamBodyCard}>
      <div className={aboutTeamBodyCardImg}>
        <img src={image} alt={title} />
      </div>
      <div className={aboutTeamBodyCardContent}>
        <div className={aboutTeamBodyCardContentContainer}>
          <h2>{title}</h2>
          <h5>{designation}</h5>
        </div>
      </div>
      <div className={aboutTeamBodyCardLinkedIn}>
        <a href={linkedIn} target="_blank" rel="noreferrer">
          <img src={IconLinkedIn.src} />
        </a>
      </div>
    </div>
  );
};

export default MemberCard;

import React from "react";

// COMPONENT
import Faq from "../../Shared/Faq/Faq";

// LAYOUT
import layout from "../../../public/assets/images/social_business/faq_path.png";

// CSS
import styles from "./SocialBusinessFaqBody.module.scss";

const SocialBusinessFaqBody = () => {
  const { faqBody, imgContainer, quesContainer, faq, icon } = styles;

  return (
    <div className={faqBody}>
      <div className={imgContainer}>
        <img src={layout.src} alt="layout" />
      </div>
      <div className={quesContainer}>
        <h2>
          Here are some of the most frequently asked questions about the Social
          Business world.
        </h2>
        <Faq />
      </div>
    </div>
  );
};

export default SocialBusinessFaqBody;

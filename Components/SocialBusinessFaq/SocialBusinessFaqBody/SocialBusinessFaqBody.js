import React from "react";

// COMPONENT
import Faq from "../../Shared/Faq/Faq";

// LAYOUT
import layout from "../../../public/assets/images/social_business/faq_path.png";

// data
// import faqData from "./data";

// CSS
import styles from "./SocialBusinessFaqBody.module.scss";

const SocialBusinessFaqBody = ({ faqData }) => {
  const { faqBody, imgContainer, quesContainer, faqContainer, faq, icon } = styles;

  return (
    <div className={faqBody}>
      <div className={imgContainer}>
        <img src={layout.src} alt="layout" />
      </div>
      <div className={quesContainer}>
        <h2>Here are some of the most frequently asked questions about the Social Business world.</h2>
        <div className={faqContainer}>
          {faqData.map((data) => {
            return <Faq key={data.id} ques={data.question} ans={data.answer} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialBusinessFaqBody;

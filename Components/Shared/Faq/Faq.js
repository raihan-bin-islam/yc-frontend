import React, { useState } from "react";

// CSS
import styles from "./Faq.module.scss";

const Faq = () => {
  const { faq, icon, answer, question, show } = styles;

  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  console.log(visible);

  return (
    <div className={faq} onClick={() => handleVisible()}>
      {/* Question */}
      <div className={question}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className={icon}>
          <h1>+</h1>
        </div>
      </div>
      {/* Answer */}
      <div className={visible ? `${answer} ${show}` : `${answer}`}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Faq;

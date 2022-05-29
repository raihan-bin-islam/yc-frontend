import React, { useState } from "react";

// CSS
import styles from "./Faq.module.scss";

const Faq = ({ ques, ans }) => {
  const { faq, icon, answer, questionContainer, question, show, line, lineNone, one, two, rotate } = styles;

  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  // console.log(visible);

  return (
    <div className={faq} onClick={() => handleVisible()}>
      <div className={visible ? `${lineNone}` : `${line}`}></div>
      {/* Question */}
      <div className={questionContainer}>
        <p className={visible ? `${question}` : ""}>{ques}</p>
        <div className={icon}>
          <div className={one}></div>
          <div className={visible ? `${two} ${rotate}` : `${two}`}></div>
        </div>
      </div>
      {/* Answer */}
      <div className={visible ? `${answer} ${show}` : `${answer}`}>
        <br />
        <br />
        <br />
        <p>{ans}</p>
      </div>
    </div>
  );
};

export default Faq;

import React from "react";

// DATA
import weDoData from "../../../../staticPageData/whatWeDo.json";

// CSS
import styles from "./AboutDoCard.module.scss";

const AboutDoCard = ({ scrollRevealClass, image, title, paragraph }) => {
  const { aboutDoGrid, box, aboutDoGridFooter } = styles;

  return (
    <div className={`${aboutDoGrid} ${scrollRevealClass}`}>
      <img src={image} alt={title} />
      <div className={box}>
        <div className={aboutDoGridFooter}>
          <h3>{title}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutDoCard;

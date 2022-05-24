import React from "react";
import weDoData from "../../../staticPageData/whatWeDo.json";
import weDoPath from "../../../public/assets/images/about_us/wedopath.png";
import yunusPart from "../../../public/assets/images/about_us/yc_part.png";

// COMPONENTS
import AboutDoCard from "./AboutDoCard/AboutDoCard";

// CSS
import styles from "./AboutDoGrid.module.scss";

const AboutDoGrid = () => {
  // style
  const {
    aboutDoContainer,
    aboutDoGrid,
    aboutDoGridFooter,
    aboutDoBody,
    aboutDoImgPath,
    aboutDoFooter,
    box,
  } = styles;

  return (
    <section className={aboutDoContainer}>
      <div className={aboutDoImgPath}>
        <img src={weDoPath.src} alt="we-do-path" />
      </div>
      <div className="container-layout">
        <div className={aboutDoBody}>
          {weDoData.map((weDo, index) => (
            <AboutDoCard
              key={index}
              image={weDo.image}
              title={weDo.title}
              paragraph={weDo.paragraph}
            />
          ))}
        </div>
      </div>
      <div className={aboutDoFooter}>
        <img src={yunusPart.src} alt="yunus-part" />
      </div>
    </section>
  );
};

export default AboutDoGrid;

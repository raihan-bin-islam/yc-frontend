import React from "react";
import weDoData from "../../../staticPageData/whatWeDo.json";
import weDoPath from "../../../public/assets/images/about_us/wedopath.png";
import yunusPart from "../../../public/assets/images/about_us/yc_part.png";

// COMPONENTS
import AboutDoCard from "./AboutDoCard/AboutDoCard";
import PreLoader from "../../Shared/PreLoader/PreLoader";

// CSS
import styles from "./AboutDoGrid.module.scss";
import useScrollReveal from "../../Hooks/useScrollReveal";

const AboutDoGrid = ({ isLoading, data }) => {
  // style
  const { aboutDoContainer, aboutDoBody, aboutDoImgPath, aboutDoFooter, box } = styles;

  const { revealFromLeft, revealFromRight } = useScrollReveal("about-us__what_we_do");

  return (
    <section className={aboutDoContainer}>
      <div className={aboutDoImgPath}>
        <img src={weDoPath.src} alt="we-do-path" />
      </div>
      <div className="container-layout">
        <div className={aboutDoBody}>
          {!isLoading ? (
            data.map(({ id, title, thumb_image, short_desc }, index) => (
              <AboutDoCard
                key={id}
                image={thumb_image}
                title={title}
                paragraph={short_desc}
                scrollRevealClass={`${index % 2 === 0 ? revealFromLeft : revealFromRight}`}
              />
            ))
          ) : (
            <PreLoader />
          )}
        </div>
      </div>
      <div className={aboutDoFooter}>
        <img src={yunusPart.src} alt="yunus-part" />
      </div>
    </section>
  );
};

export default AboutDoGrid;

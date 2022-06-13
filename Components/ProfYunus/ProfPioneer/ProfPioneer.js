/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import styles from "./profpioneer.module.scss";
import pioneerImg from "../../../public/assets/images/prof_yunus/pioneer.jpg";
import Awards from "../Awards/Awards";
import BgSvg from "./BgSvg/BgSvg";

// custom hook
import useScrollReveal from "../../Hooks/useScrollReveal";

const ProfPioneer = ({ awardsData }) => {
  //styles
  const { pioneerSection, pioneerContainer, pioneerLeft, pioneerRight, bgSvg } = styles;

  // Scroll reveal animation
  const { revealFromLeft, revealFromRight } = useScrollReveal();

  return (
    <section className={pioneerSection}>
      <BgSvg className={bgSvg} />
      <div className="container-layout">
        <div className={pioneerContainer}>
          <div className={pioneerLeft}>
            <div>
              <h3 className={revealFromLeft}>
                Pioneering
                <br />
                the ground-breaking <br />
                concept of
              </h3>
              <h2 className={revealFromLeft}>Social Business</h2>
              <p className={revealFromLeft}>
                Nobel Peace Laureate Professor Muhammad Yunus defined the ground-breaking concept of Social Business.
                The journey started when he founded the Grameen Bank Project in the village of Jobra, Bangladesh, in
                1976.
              </p>
            </div>
          </div>
          <div className={pioneerRight}>
            <img className={revealFromRight} src={pioneerImg.src} alt="pioneer" />
          </div>
        </div>
      </div>
      {awardsData.length > 0 && <Awards awardsData={awardsData} />}
    </section>
  );
};

export default ProfPioneer;

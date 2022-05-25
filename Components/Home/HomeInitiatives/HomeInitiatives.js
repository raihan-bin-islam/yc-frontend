import React from "react";
import styles from "./homeinitiatives.module.scss";
import initiative1 from "../../../public/assets/images/landing_page/initiative1.jpg";
import initiative2 from "../../../public/assets/images/landing_page/initiative2.jpg";
import initiative3 from "../../../public/assets/images/landing_page/initiative3.jpg";
import threeZeroImg from "../../../public/assets/images/landing_page/3zero_logo.svg";
import BgSvg from "./bgSvg/BgSvg";

const HomeInitiatives = () => {
  const {
    bgSvg,
    initiativesSection,
    initiativeHeader,
    initiativeBody,
    bodyRow1,
    bodyRow2,
    bodyRow1Right,
    bodyRow1Left,
    bodyRow2Left,
    bodyRow2Right,
    rightContent,
  } = styles;
  return (
    <section className={initiativesSection}>
      <BgSvg className={bgSvg} />
      <h2 className={initiativeHeader}>LATEST INITIATIVES</h2>
      <div className={`container-layout ${initiativeBody}`}>
        <div className={bodyRow1}>
          <div className={bodyRow1Left}>
            <img src={threeZeroImg.src} alt="3zero club" />
            <p>
              The 3ZERO Club is an initiative towards achieving the Nobel Peace Laureate Professor Muhammad Yunus’s
              vision of creating a world of three zeros{" "}
            </p>
            <button>
              <a href="https://3zero.club/" target="_blank" rel="noreferrer">
                learn more
              </a>
            </button>
          </div>
          <div className={bodyRow1Right}>
            <img src={initiative1.src} alt="initiative-1" />
          </div>
        </div>
        <div className={bodyRow2}>
          <div className={bodyRow2Left}>
            <img src={initiative2.src} alt="initiative-2" />
            <div>
              <h2>YSBC</h2>
              <h3>YUNUS SOCIAL BUSINESS CENTRE</h3>
            </div>
            <div>
              <button>
                <a href="https://socialbusinesspedia.com/ysbc/pages/about-YSBC" target="_blank" rel="noreferrer">
                  learn more
                </a>
              </button>
            </div>
          </div>
          <div className={bodyRow2Right}>
            <div>
              <img src={initiative3.src} alt="initiative-3" />
            </div>
            <div className={rightContent}>
              <div>
                <h4>SOCIAL BUSINESS</h4>
                <h2>DESIGN LAB</h2>
                <button>
                  <a href="https://socialbusinesspedia.com/designlab" target="_blank" rel="noreferrer">
                    learn more
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInitiatives;

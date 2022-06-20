import React, { useEffect, useState } from "react";
import styles from "./homeinitiatives.module.scss";
import initiative1 from "../../../public/assets/images/landing_page/initiative1.jpg";
import initiative2 from "../../../public/assets/images/landing_page/initiative2.jpg";
import initiative3 from "../../../public/assets/images/landing_page/initiative3.jpg";
import threeZeroImg from "../../../public/assets/images/landing_page/3zero_logo.svg";
import BgSvg from "./bgSvg/BgSvg";
import Link from "next/link";
import ButtonLight from "../../Shared/Button/Button";
import useScrollReveal from "../../Hooks/useScrollReveal";

const HomeInitiatives = () => {
  const { revealFromTop, revealFromRight, revealFromBottom, revealFromLeft } = useScrollReveal("home__initiatives");

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
    buttonComponent,
  } = styles;

  // Scroll reveal classes

  return (
    <section className={initiativesSection}>
      <BgSvg className={bgSvg} />
      <h2 className={initiativeHeader}>LATEST INITIATIVES</h2>
      <div className={`container-layout ${initiativeBody}`}>
        <div className={bodyRow1}>
          <div className={`${bodyRow1Left}`}>
            <img className={revealFromLeft} src={threeZeroImg.src} alt="3zero club" />
            <p className={revealFromLeft}>
              The 3ZERO Club is an initiative towards achieving the Nobel Peace Laureate Professor Muhammad Yunus’s
              vision of creating a world of three zeros{" "}
            </p>

            <div className={`${buttonComponent} ${revealFromLeft}`}>
              <Link href="https://3zero.club/">
                <a target="_blank" rel="noreferrer">
                  <ButtonLight text="learn more" />
                </a>
              </Link>
            </div>
          </div>
          <div className={bodyRow1Right}>
            <img className={revealFromRight} src={initiative1.src} alt="initiative-1" />
          </div>
        </div>
        <div className={bodyRow2}>
          <div className={bodyRow2Left}>
            <img className={revealFromLeft} src={initiative2.src} alt="initiative-2" />
            <div>
              <h2 className={revealFromLeft}>YSBC</h2>
              <h3 className={revealFromLeft}>YUNUS SOCIAL BUSINESS CENTRE</h3>
            </div>

            <div>
              <div className={`${buttonComponent} ${revealFromLeft}`}>
                <Link href="https://socialbusinesspedia.com/ysbc/pages/about-YSBC">
                  <a target="_blank" rel="noreferrer">
                    <ButtonLight text="learn more" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={bodyRow2Right}>
            <div>
              <img className={revealFromBottom} src={initiative3.src} alt="initiative-3" />
            </div>
            <div className={rightContent}>
              <div>
                <h4 className={revealFromRight}>SOCIAL BUSINESS</h4>
                <h2 className={revealFromRight}>DESIGN LAB</h2>

                <div className={`${buttonComponent} ${revealFromRight}`}>
                  <Link href="https://socialbusinesspedia.com/designlab">
                    <a target="_blank" rel="noreferrer">
                      <ButtonLight text="learn more" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInitiatives;

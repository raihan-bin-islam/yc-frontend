import React from "react";

// COMPONENTS
import ButtonLight from "../../../Components/Shared/Button/Button";
import Sliders from "../../Shared/Slider/Slider";
import WhatWeDoCard from "../../Shared/WhatWeDoCard/WhatWeDoCard";

// IMAGES
import aboutImage from "/public/assets/images/ysbc/about.png";
import becomeImage from "/public/assets/images/ysbc/become.png";

// API
import useFetch from "../../Hooks/useFetch";

// Data
import cardData from "../../../staticPageData/ysbc/ysbcData.json";

// LAYOUT
import OvalBase from "../../Shared/CommonSvg/OvalBase";
import LeftLayout from "../../Shared/CommonSvg/LeftLayout";
import Layout from "../../Shared/CommonSvg/Layout";

// CSS
import styles from "./YsbcBody.module.scss";

const YsbcBody = () => {
  const {
    ysbcBody,
    aboutSection,
    imageContainer,
    textContainer,
    box,
    layoutContainer,
    layoutContainer1,
    becomeSection,
    btnContainer,
    latestSection,
    cardContainer,
    sliderContainer,
    leafContainer,
  } = styles;

  // DATA
  const [isLoading, data] = useFetch("/yunus-speech");

  return (
    <div className={ysbcBody}>
      <div className={layoutContainer}>
        <OvalBase />
      </div>
      {/* ABOUT SECTION START */}
      <div className={`${aboutSection} container-layout`}>
        <h1>about ysbc</h1>
        <div className={box}>
          <div className={imageContainer}>
            <img src={aboutImage.src} alt="about image" />
          </div>
          <div className={textContainer}>
            <p>
              A Yunus Social Business Centre (YSBC) is a hub for social business in universities around the world,
              following the principles of Nobel Laureate Professor Muhammad Yunus. YSBCs are set in collaboration
              through agreement between Yunus Centre and the university with the aim of spreading the concept and
              practice of social business among the university students and researchers. YSBCs conduct research,
              teaching, academic program and curriculum development, action research, knowledge-sharing events in social
              business like competitions, workshops and seminars among other things. YSBCs also find new and innovative
              means to expand the concept of social business among the students and researchers and even outside the
              university to the larger community and region.
            </p>
            <a href="https://socialbusinesspedia.com/ysbc/pages/about-YSBC" target="__blank">
              <ButtonLight text="Read More" />
            </a>
          </div>
        </div>
      </div>
      {/* ABOUT SECTION END */}

      {/* BECOME SECTION START */}
      <div className={`${becomeSection} container-layout`}>
        <div className={textContainer}>
          <h1>become a ysbc</h1>
          <p>
            To begin the formal process, we require a Letter of Intent from the university by an authorized person from
            the university which can include its Chancellor, Vice Chancellor, President, Rector, Registrar, Dean, Head
            of Department or equivalent position proposing the university's interest to set up the Yunus Social Business
            Centre (YSBC). The letter can be sent electronically through sharing a scanned copy of the signed proposal.
          </p>
          <p>
            The Yunus Centre upon assessment of the proposal shall revert with the following documents that will need to
            be signed:
          </p>
          <p>Memorandum of Understanding outlining the provisions of agreement</p>
          <p>Terms of Reference for use of “Yunus” Name</p>
          <p>
            Upon review of documents by the university and agreement by both the parties to collaborate, the agreements
            copies are signed by representatives of the Yunus Centre and the university to mark the formal establishment
            of the YSBC.
          </p>
          <div className={btnContainer}>
            <a href="https://socialbusinesspedia.com/ysbc/pages/how-to-join" target="__blank">
              <ButtonLight text="Apply Now" dark />
            </a>
          </div>
        </div>
        <div className={imageContainer}>
          <img src={becomeImage.src} alt="become image" />
        </div>
      </div>
      {/* BECOME SECTION END */}

      {/* LATEST SECTION START */}
      <div className={`${latestSection} container-layout`}>
        <div className={layoutContainer1}>
          <LeftLayout />
        </div>
        <h1>latest</h1>
        <span>YSBC Web Lecture Series</span>
        <div className={sliderContainer}>
          <Sliders cardType="video" sliderData={data} numberOfSlides={3} />
        </div>
        <div className={cardContainer}>
          {cardData.map((data, index) => (
            <WhatWeDoCard
              key={index}
              title={data.title}
              desc={data.paragraph}
              photo={data.image}
              link={data.link}
              hoverDisable
              externalLink
            />
          ))}
        </div>
      </div>
      {/* LATEST SECTION END */}

      <div className={leafContainer}>
        <Layout />
      </div>
    </div>
  );
};

export default YsbcBody;

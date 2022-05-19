/* eslint-disable @next/next/no-img-element */
import React from "react";
import WhatWeDoCard from "../../Shared/WhatWeDoCard/WhatWeDoCard";
import styles from "./homewhatwedo.module.scss";
import whatWeDoData from "../../../staticPageData/whatWeDo.json";
import weDoBackSvg from "../../../public/assets/images/landing_page/we_do_back.svg";
import Slider from "react-slick/lib/slider";

const HomeWhatWeDo = () => {
  // Module Style Object Destructuring
  const { heading, heroWhatWeDoContainer, whatWeDoMain, whatWeDoBody, backgroundPath, whatWeDoBodyMobile } = styles;

  // Slick Slider Config
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <section className={heroWhatWeDoContainer}>
      <div className={backgroundPath}>
        <img src={weDoBackSvg.src} alt="what-we-do" />
      </div>
      <div className={`container-layout ${whatWeDoMain}`}>
        <h2 className={heading}>what we do</h2>

        <div className={whatWeDoBody}>
          {whatWeDoData.map((data, index) => (
            <WhatWeDoCard key={index} title={data.title} desc={data.paragraph} photo={data.image} />
          ))}
        </div>
        <div className={whatWeDoBodyMobile}>
          <Slider {...sliderSettings}>
            {whatWeDoData.map((data, index) => (
              <WhatWeDoCard key={index} title={data.title} desc={data.paragraph} photo={data.image} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeWhatWeDo;

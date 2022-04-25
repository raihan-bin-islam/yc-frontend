import React from "react";
import Heading from "../../Shared/Heading/Heading";
import WhatWeDoCard from "../../Shared/WhatWeDoCard/WhatWeDoCard";
import styles from "./homewhatwedo.module.scss";
import whatWeDoData from "../../../static/whatWeDo.json";
import weDoBackSvg from "../../../public/assets/images/landing_page/we_do_back.svg";
import Slider from "react-slick/lib/slider";

const HomeWhatWeDo = () => {
  const { heroWhatWeDoContainer, whatWeDoMain, whatWeDoHeader, whatWeDoBody, backgroundPath, whatWeDoBodyMobile } =
    styles;

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
        <Heading text="what we do" center />

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

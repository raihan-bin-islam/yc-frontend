import React from "react";
import Hero from "../../../Components/Publications/InternsMagazine/Hero/Hero";
import Sliders from "../../../Components/Shared/Slider/Slider";

import magazines from "../../../staticPageData/publications/magazines.json";

const InternMagazine = () => {
  return (
    <>
      <Hero />
      <div className="container-layout ptb10">
        <Sliders numberOfSlides={6} sliderData={magazines} />
      </div>
    </>
  );
};

export default InternMagazine;

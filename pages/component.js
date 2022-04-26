import React from "react";
import Highlight from "../Components/Shared/Highlight/Highlight";
import NewsCard from "../Components/Shared/NewsCard/NewsCard";
import SliderCard from "../Components/Shared/SliderCard/SliderCard";
import WhatWeDoCard from "../Components/Shared/WhatWeDoCard/WhatWeDoCard";

const Component = () => {
  return (
    <>
      {/* <Highlight /> */}
      {/* <WhatWeDoCard /> */}
      {/* <NewsCard /> */}
      <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
        <SliderCard image="/assets/images/landing_page/initiative1.jpg" type="awards" />
        <SliderCard image="/assets/images/landing_page/initiative1.jpg" type="awards" />
        <SliderCard image="/assets/images/landing_page/initiative1.jpg" type="awards" />
        <SliderCard image="/assets/images/landing_page/initiative1.jpg" type="awards" />
        <SliderCard image="/assets/images/landing_page/initiative1.jpg" type="awards" />
        <SliderCard image="/assets/images/landing_page/initiative1.jpg" type="awards" />
        <SliderCard image="/assets/images/landing_page/initiative1.jpg" type="awards" />
        <SliderCard image="/assets/images/landing_page/initiative1.jpg" type="awards" />
      </div>
    </>
  );
};

export default Component;

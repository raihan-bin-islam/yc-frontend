import React from "react";
import Heading from "../Components/Shared/Heading/Heading";
import Highlight from "../Components/Shared/Highlight/Highlight";
import NewsCard from "../Components/Shared/NewsCard/NewsCard";
import SliderCard from "../Components/Shared/SliderCard/SliderCard";
import WhatWeDoCard from "../Components/Shared/WhatWeDoCard/WhatWeDoCard";

const Component = () => {
  return (
    <>
      <Highlight />
      {/* <WhatWeDoCard /> */}
      <NewsCard />
      <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 50 }}>
        <SliderCard type="articles" />
        <SliderCard type="articles" size={2} />
        <SliderCard type="articles" />
      </div>
      <Heading text="What We Do" size="large" />
    </>
  );
};

export default Component;

import React, { useState } from "react";
import AwardsCard from "../Components/Shared/AwardsCard/AwardsCard";
import Highlight from "../Components/Shared/Highlight/Highlight";
import NewsCard from "../Components/Shared/NewsCard/NewsCard";
import SliderCard from "../Components/Shared/SliderCard/SliderCard";
import WhatWeDoCard from "../Components/Shared/WhatWeDoCard/WhatWeDoCard";

const Component = () => {
  return (
    <>
      <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        <AwardsCard />
        <AwardsCard />
        <AwardsCard />
        <AwardsCard />
        <AwardsCard />
        <AwardsCard />
        <AwardsCard />
        <AwardsCard />
      </div>
    </>
  );
};

export default Component;

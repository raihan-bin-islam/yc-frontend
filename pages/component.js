import React, { useState } from "react";
import AwardsCard from "../Components/Shared/AwardsCard/AwardsCard";
import Highlight from "../Components/Shared/Highlight/Highlight";
import NewsCard from "../Components/Shared/NewsCard/NewsCard";
import PreLoader from "../Components/Shared/PreLoader/PreLoader";
import SliderCard from "../Components/Shared/SliderCard/SliderCard";
import WhatWeDoCard from "../Components/Shared/WhatWeDoCard/WhatWeDoCard";

const Component = () => {
  return (
    <>
      <PreLoader />
      <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {/* <AwardsCard />
        <AwardsCard />
        <AwardsCard />
        <AwardsCard />
        <AwardsCard />
        <AwardsCard />
        <AwardsCard />
        <AwardsCard /> */}
      </div>
    </>
  );
};

export default Component;

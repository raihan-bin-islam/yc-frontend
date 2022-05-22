import React, { useState } from "react";
import HomeNews from "../Components/Home/HomeNews/HomeNews";
import HomeVideoSlide from "../Components/Home/HomeVideoSlide/HomeVideoSlide";
import TestAnimation from "../Components/ProfYunus/TestAnimation";
import ProfYunusCommon from "../Components/Shared/ProfYunusSubPages/ProfYunusSubPages";
import AwardsCard from "../Components/Shared/AwardsCard/AwardsCard";
import Highlight from "../Components/Shared/Highlight/Highlight";
import NewsCard from "../Components/Shared/NewsCard/NewsCard";
import PreLoader from "../Components/Shared/PreLoader/PreLoader";
import SliderCard from "../Components/Shared/SliderCard/SliderCard";
import WhatWeDoCard from "../Components/Shared/WhatWeDoCard/WhatWeDoCard";
import Pagination from "../Components/Shared/Pagination/Pagination";

const Component = () => {
  return (
    <>
      {/* <TestAnimation /> */}
      <div style={{ margin: 400 }}>
        <Pagination />
      </div>
    </>
  );
};

export default Component;

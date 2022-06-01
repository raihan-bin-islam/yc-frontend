import React, { useState } from "react";
import HomeNews from "../Components/Home/HomeNews/HomeNews";
import HomeVideoSlide from "../Components/Home/HomeVideoSlide/HomeVideoSlide";
// import TestAnimation from "../Components/ProfYunus/TestAnimation";
import ProfYunusCommon from "../Components/Shared/ProfYunusSubPages/ProfYunusSubPages";
import AwardsCard from "../Components/Shared/AwardsCard/AwardsCard";
import Highlight from "../Components/Shared/Highlight/Highlight";
import NewsCard from "../Components/Shared/NewsCard/NewsCard";
import PreLoader from "../Components/Shared/PreLoader/PreLoader";
import SliderCard from "../Components/Shared/SliderCard/SliderCard";
import WhatWeDoCard from "../Components/Shared/WhatWeDoCard/WhatWeDoCard";
import Pagination from "../Components/Shared/Pagination/Pagination";
import Hero from "../Components/Publications/InternsMagazine/Hero/Hero";
import ReviewComponent from "../Components/Publications/BookReviews/Reviews/ReviewComponent/ReviewComponent";
import Reviews from "../Components/Publications/BookReviews/Reviews/Reviews";
import magazines from "../staticPageData/publications/internsMagazine/magazines.json";
import Sliders from "../Components/Shared/Slider/Slider";
import RecentNewsCard from "../Components/Shared/RecentNewsCard/RecentNewsCard";
import useFetch from "../Components/Hooks/useFetch";
import Featured from "../Components/Media/MediaNewsAndHighlights/Featured/Featured";

const Component = () => {
  return (
    <>
      {/* <PreLoader /> */}

      <div className="container-layout">
        <Featured />
      </div>
    </>
  );
};

export default Component;

import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
import Featured from "../../../Components/Media/MediaNewsAndHighlights/Featured/Featured";
import Hero from "../../../Components/Media/MediaNewsAndHighlights/Hero/Hero";
import Sliders from "../../../Components/Shared/Slider/Slider";

const News = () => {
  const [newsIsLoading, newsData] = useFetch("/news");
  return (
    <>
      <Hero />
      <div className="container-layout pb10">
        <Featured />
        <Sliders cardType="newsCard" sliderData={newsData} />
      </div>
    </>
  );
};

export default News;

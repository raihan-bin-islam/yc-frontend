import React from "react";
import useFetch from "../../../Hooks/useFetch";
import Sliders from "../../../Shared/Slider/Slider";

const RecentNews = () => {
  const [newsIsLoading, newsData] = useFetch("/news");
  return <Sliders cardType="newsCard" sliderData={newsData} />;
};

export default RecentNews;

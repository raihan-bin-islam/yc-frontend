import React from "react";

import useFetch from "../../../Components/Hooks/useFetch";
// Components
import Featured from "../../../Components/Media/MediaNewsAndHighlights/Featured/Featured";
import Hero from "../../../Components/Media/MediaNewsAndHighlights/Hero/Hero";
import BreadCrumb from "../../../Components/Shared/BreadCrumb/BreadCrumb";
import PreLoader from "../../../Components/Shared/PreLoader/PreLoader";

const News = () => {
  const [isLoading, newsData] = useFetch("/news?category=news");
  return (
    <>
      <Hero />
      <div className="container-layout pb10 negMargin12">
        {newsData ? <Featured newsData={newsData} /> : <PreLoader />}
      </div>
    </>
  );
};

export default News;

import React from "react";
import AllAwards from "../../../Components/ProfYunus/AllAwards/AllAwards";
import HeroBannerSmall from "../../../Components/Shared/HeroBannerSmall/HeroBannerSmall";
import BreadCrumb from "../../../Components/Shared/BreadCrumb/BreadCrumb";
import useFetch from "../../../Components/Hooks/useFetch";
const AwardsPage = () => {
  const [isLoading, awardsData] = useFetch("/awards");

  return (
    <>
      <HeroBannerSmall title="Awards" subtitle="Received by Professor Muhammad Yunus" />
      <BreadCrumb />
      {awardsData.length > 0 && <AllAwards awardsData={awardsData} />}
    </>
  );
};

export default AwardsPage;

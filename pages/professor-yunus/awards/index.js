import React from "react";
import AllAwards from "../../../Components/ProfYunus/AllAwards/AllAwards";
import HeroBannerSmall from "../../../Components/Shared/HeroBannerSmall/HeroBannerSmall";
import BreadCrumb from "../../../Components/Shared/BreadCrumb/BreadCrumb";
const AwardsPage = () => {
  return (
    <>
      <HeroBannerSmall title="Awards" subtitle="Received by Professor Muhammad Yunus" />
      <BreadCrumb />
      <AllAwards />
    </>
  );
};

export default AwardsPage;

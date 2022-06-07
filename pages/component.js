import React, { useState } from "react";
import BreadCrumb from "../Components/Shared/BreadCrumb/BreadCrumb";
import HeroBannerSmall from "../Components/Shared/HeroBannerSmall/HeroBannerSmall";

const Component = () => {
  return (
    <>
      {/* <PreLoader /> */}

      <div className="">
        <HeroBannerSmall />
        <BreadCrumb blue />
        {/* <MediaLibraryPage /> */}
        <div className="container-layout">{/* <RecentNews /> */}</div>
      </div>
    </>
  );
};

export default Component;

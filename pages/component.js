import React, { useState } from "react";
import FormErrorMessage from "../Components/Forms/FormErrorMessage/FormErrorMessage";
import BreadCrumb from "../Components/Shared/BreadCrumb/BreadCrumb";
import HeroBannerSmall from "../Components/Shared/HeroBannerSmall/HeroBannerSmall";

const Component = () => {
  return (
    <>
      {/* <PreLoader /> */}

      <div className="">
        {/* <HeroBannerSmall />
        <BreadCrumb blue /> */}
        {/* <MediaLibraryPage /> */}
        <div className="container-layout pt10 pb10">
          {/* <RecentNews /> */} <FormErrorMessage msg="This Field Is Required" />
        </div>
      </div>
    </>
  );
};

export default Component;

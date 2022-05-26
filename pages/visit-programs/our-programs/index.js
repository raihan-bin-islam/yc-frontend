import React from "react";
import Programs from "../../../Components/Shared/Programs/Programs";
// import data
import programs from "../../../staticPageData/visitPrograms/ycPrograms/programs/programs.json";
import linksData from "../../../staticPageData/visitPrograms/ycPrograms/hero/links.json";

import heroBanner from "../../../public/assets/images/visit_programs/yc_programs/yc_programs_banner.png";
// import component
import HeroWithLinks from "../../../Components/Shared/HeroWithLinks/HeroWithLinks";

const OurPrograms = () => {
  return (
    <>
      <HeroWithLinks linksData={linksData} bannerImage={heroBanner} capitalize />
      <Programs programs={programs} handbook />
    </>
  );
};

export default OurPrograms;

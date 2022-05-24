import React from "react";

// Import data
import heroBanner from "../../../../public/assets/images/visit_programs/yc_programs/yc_programs_banner.png";
import linksData from "../../../../staticPageData/visitPrograms/ycPrograms/hero/links.json";
import HeroWithLinks from "../../../Shared/HeroWithLinks/HeroWithLinks";
// Import Components
const Hero = () => {
  return <HeroWithLinks linksData={linksData} bannerImage={heroBanner} capitalize />;
};

export default Hero;

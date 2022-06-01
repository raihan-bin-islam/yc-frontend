import React from "react";
// import data
import heroYunus from "../../../public/assets/images/prof_yunus/prof_yunus.png";
import linksData from "../../../staticPageData/profYunus/hero/links.json";
// import components
import HeroWithLinks from "../../Shared/HeroWithLinks/HeroWithLinks";

const Hero = () => {
  return <HeroWithLinks linksData={linksData} bannerImage={heroYunus} />;
};

export default Hero;

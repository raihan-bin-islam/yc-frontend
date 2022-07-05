import React from "react";
import Programs from "../../../Components/Shared/Programs/Programs";
// import data
// import programs from "../../../staticPageData/visitPrograms/ycPrograms/programs/programs.json";
import linksData from "../../../staticPageData/visitPrograms/ycPrograms/hero/links.json";

import heroBanner from "../../../public/assets/images/visit_programs/yc_programs/yc_programs_banner.png";
// import component
import HeroWithLinks from "../../../Components/Shared/HeroWithLinks/HeroWithLinks";
import useFetch from "../../../Components/Hooks/useFetch";

const OurPrograms = () => {
  const [isLoading, programs] = useFetch("/visit-programs");
  // Internal Links for all the forms
  const formLinks = [
    "/application-form/immersion-program",
    "/application-form/exposure-visit",
    "/application-form/internship",
  ];

  // Add links to the programs data fetched from the api
  const programsWithLinks = programs?.map((data, index) => ({ ...data, link: formLinks[index] }));

  return (
    <>
      <HeroWithLinks linksData={linksData} bannerImage={heroBanner} capitalize />
      <Programs programs={programsWithLinks} formLinks={formLinks} handbook />
    </>
  );
};

export default OurPrograms;

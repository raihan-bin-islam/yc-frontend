import React from "react";
// import data
import programs from "../../../staticPageData/visitPrograms/offshorePrograms/programs/programs.json";

import Programs from "../../../Components/Shared/Programs/Programs";
import Hero from "../../../Components/OffshorePrograms/Hero/Hero";

const OffshorePrograms = () => {
  return (
    <>
      <Hero />
      <Programs programs={programs} />
    </>
  );
};

export default OffshorePrograms;

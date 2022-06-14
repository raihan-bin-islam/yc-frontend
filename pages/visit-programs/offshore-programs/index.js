import React from "react";
// import data
// import programs from "../../../staticPageData/visitPrograms/offshorePrograms/programs/programs.json";

import Programs from "../../../Components/Shared/Programs/Programs";
import Hero from "../../../Components/OffshorePrograms/Hero/Hero";
import useFetch from "../../../Components/Hooks/useFetch";

const OffshorePrograms = () => {
  const [isLoading, programs] = useFetch("/offshore-programs");
  return (
    <>
      <Hero />
      <Programs programs={programs} />
    </>
  );
};

export default OffshorePrograms;

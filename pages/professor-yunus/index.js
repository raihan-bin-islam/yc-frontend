import React from "react";

import Hero from "../../Components/ProfYunus/Hero/Hero";
import ProfBooks from "../../Components/ProfYunus/ProfBooks/ProfBooks";
import ProfPioneer from "../../Components/ProfYunus/ProfPioneer/ProfPioneer";
import ProfVideoSlider from "../../Components/ProfYunus/ProfVideoSlider/ProfVideoSlider";

const ProfYunus = () => {
  return (
    <div>
      <Hero />
      <ProfPioneer />
      <ProfVideoSlider/>
      <ProfBooks />
    </div>
  );
};

export default ProfYunus;

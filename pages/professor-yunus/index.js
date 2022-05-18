import React from "react";
import useFetch from "../../Components/Hooks/useFetch";

import Hero from "../../Components/ProfYunus/Hero/Hero";
import ProfBooks from "../../Components/ProfYunus/ProfBooks/ProfBooks";
import ProfPioneer from "../../Components/ProfYunus/ProfPioneer/ProfPioneer";
import ProfVideoSlider from "../../Components/ProfYunus/ProfVideoSlider/ProfVideoSlider";

const ProfYunus = () => {
  const [bookIsPending, books] = useFetch("/books");
  const [awardIsPending, awardsData] = useFetch("/awards");
  console.log(awardsData);
  return (
    <div>
      <Hero />
      <ProfPioneer awardsData={awardsData} />
      <ProfVideoSlider />
      <ProfBooks books={books} />
    </div>
  );
};

export default ProfYunus;

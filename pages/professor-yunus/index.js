import React from "react";
import useFetch from "../../Components/Hooks/useFetch";

import Hero from "../../Components/ProfYunus/Hero/Hero";
import ProfBooks from "../../Components/ProfYunus/ProfBooks/ProfBooks";
import ProfPioneer from "../../Components/ProfYunus/ProfPioneer/ProfPioneer";
import ProfVideoSlider from "../../Components/ProfYunus/ProfVideoSlider/ProfVideoSlider";
import PreLoader from "../../Components/Shared/PreLoader/PreLoader";

const ProfYunus = () => {
  const [bookIsPending, books] = useFetch("/books");
  const [awardIsPending, awardsData] = useFetch("/awards");

  const [speechIsLoading, videoData] = useFetch("/yunus-speech");
  const yunusSpeech = videoData.length > 0 && videoData.filter(({ is_home_page }) => !is_home_page);
  // console.log(yunusSpeech);
  return (
    <div>
      <Hero />
      {awardsData.length > 0 && <ProfPioneer awardsData={awardsData} />}
      {yunusSpeech.length > 0 && <ProfVideoSlider videoData={yunusSpeech} />}
      {books.length > 0 && <ProfBooks books={books} />}
    </div>
  );
};

export default ProfYunus;

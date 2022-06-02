import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
import VideoSubPage from "../../../Components/Shared/VideoSubPage/VideoSubPage";

const SpeechesPage = () => {
  const [videoIsLoading, videoData] = useFetch("/yunus-speech");

  return (
    <>
      <VideoSubPage heading="speeches" subHeading="By Professor Muhammad Yunus" videoData={videoData} />
    </>
  );
};

export default SpeechesPage;

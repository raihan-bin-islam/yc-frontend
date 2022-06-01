import React from "react";

// FETCH DATA
import useFetch from "../../../../Components/Hooks/useFetch";

// COMPONENTS
import VideoSubPage from "../../../../Components/Shared/VideoSubPage/VideoSubPage";

const Speeches = () => {
  const [videoIsLoading, videoData] = useFetch("/yunus-speech");
  return (
    <div>
      <VideoSubPage heading="speeches" videoData={videoData} />
    </div>
  );
};

export default Speeches;

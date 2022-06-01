import React from "react";

// FETCH DATA
import useFetch from "../../../../Components/Hooks/useFetch";

// COMPONENTS
import VideoSubPage from "../../../../Components/Shared/VideoSubPage/VideoSubPage";

const Interviews = () => {
  const [videoIsLoading, videoData] = useFetch("/yunus-speech");

  return (
    <div>
      <VideoSubPage heading="interviews" videoData={videoData} />
    </div>
  );
};

export default Interviews;

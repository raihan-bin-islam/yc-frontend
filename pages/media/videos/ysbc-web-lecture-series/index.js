import React from "react";

// FETCH DATA
import useFetch from "../../../../Components/Hooks/useFetch";

// COMPONENTS
import VideoSubPage from "../../../../Components/Shared/VideoSubPage/VideoSubPage";

const WebLectureSeries = () => {
  const [videoIsLoading, videoData] = useFetch("/yunus-speech");
  return (
    <div>
      <VideoSubPage heading="ysbc web lecture series" videoData={videoData} />
    </div>
  );
};

export default WebLectureSeries;

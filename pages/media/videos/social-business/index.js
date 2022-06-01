import React from "react";

// FETCH DATA
import useFetch from "../../../../Components/Hooks/useFetch";

// COMPONENTS
import VideoSubPage from "../../../../Components/Shared/VideoSubPage/VideoSubPage";

const SocialBusinessVideo = () => {
  const [videoIsLoading, videoData] = useFetch("/yunus-speech");

  return (
    <div>
      <VideoSubPage heading="social business" videoData={videoData} />
    </div>
  );
};

export default SocialBusinessVideo;

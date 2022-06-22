import React from "react";
// custom hook
import useFetch from "../../../Components/Hooks/useFetch";
// component
import MediaLibraryPage from "../../../Components/Shared/MediaLibraryPage/MediaLibraryPage";
import PreLoader from "../../../Components/Shared/PreLoader/PreLoader";

const PressRelease = () => {
  const [isLoading, pressRelease] = useFetch("/news?category=press_release");
  const [recentNewsIsLoading, recentNews] = useFetch("/news?category=press_release");
  return (
    <>
      {pressRelease.length > 0 ? (
        <MediaLibraryPage title="press release" newsData={pressRelease} recentNews={recentNews} />
      ) : (
        <PreLoader />
      )}
    </>
  );
};

export default PressRelease;

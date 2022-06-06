import React from "react";
// custom hook
import useFetch from "../../../Components/Hooks/useFetch";
// component
import MediaLibraryPage from "../../../Components/Shared/MediaLibraryPage/MediaLibraryPage";

const PressRelease = () => {
  const [isLoading, newsData] = useFetch("/news");
  return (
    <>
      <MediaLibraryPage title="press release" newsData={newsData} />
    </>
  );
};

export default PressRelease;

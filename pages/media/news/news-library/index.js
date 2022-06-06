import React from "react";
import useFetch from "../../../../Components/Hooks/useFetch";
import MediaLibraryPage from "../../../../Components/Shared/MediaLibraryPage/MediaLibraryPage";

const NewsLibrary = () => {
  const [isLoading, newsData] = useFetch("/news");

  return (
    <>
      <MediaLibraryPage title="news library" newsData={newsData} />
    </>
  );
};

export default NewsLibrary;

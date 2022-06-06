import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
import MediaLibraryPage from "../../../Components/Shared/MediaLibraryPage/MediaLibraryPage";

const Rejoinders = () => {
  const [isLoading, newsData] = useFetch("/news");
  return (
    <>
      <MediaLibraryPage title="rejoinders" newsData={newsData} />
    </>
  );
};

export default Rejoinders;

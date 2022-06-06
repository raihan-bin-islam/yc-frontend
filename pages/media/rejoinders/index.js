import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
import MediaLibraryPage from "../../../Components/Shared/MediaLibraryPage/MediaLibraryPage";
import PreLoader from "../../../Components/Shared/PreLoader/PreLoader";

const Rejoinders = () => {
  const [isLoading, newsData] = useFetch("/news");
  return <>{newsData.length > 0 ? <MediaLibraryPage title="rejoinders" newsData={newsData} /> : <PreLoader />}</>;
};

export default Rejoinders;

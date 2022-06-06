import React from "react";
// custom hook
import useFetch from "../../../Components/Hooks/useFetch";
// component
import MediaLibraryPage from "../../../Components/Shared/MediaLibraryPage/MediaLibraryPage";
import PreLoader from "../../../Components/Shared/PreLoader/PreLoader";

const PressRelease = () => {
  const [isLoading, newsData] = useFetch("/news");
  return <>{newsData.length > 0 ? <MediaLibraryPage title="press release" newsData={newsData} /> : <PreLoader />}</>;
};

export default PressRelease;

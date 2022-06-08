import React from "react";
import useFetch from "../../../../Components/Hooks/useFetch";
import MediaLibraryPage from "../../../../Components/Shared/MediaLibraryPage/MediaLibraryPage";
import PreLoader from "../../../../Components/Shared/PreLoader/PreLoader";

import BreadCrumb from "../../../../Components/Shared/BreadCrumb/BreadCrumb";

const NewsLibrary = () => {
  const [isLoading, newsData] = useFetch("/news");

  return <>{newsData.length > 0 ? <MediaLibraryPage title="news library" newsData={newsData} /> : <PreLoader />}</>;
};

export default NewsLibrary;

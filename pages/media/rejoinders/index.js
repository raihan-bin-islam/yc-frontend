import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
import MediaLibraryPage from "../../../Components/Shared/MediaLibraryPage/MediaLibraryPage";
import PreLoader from "../../../Components/Shared/PreLoader/PreLoader";

const Rejoinders = () => {
  const [isLoading, rejoinders] = useFetch("/rejoinders");
  return <>{rejoinders.length > 0 ? <MediaLibraryPage title="rejoinders" newsData={rejoinders} /> : <PreLoader />}</>;
};

export default Rejoinders;

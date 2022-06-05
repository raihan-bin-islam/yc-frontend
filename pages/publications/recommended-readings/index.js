import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
import RecommendedReadings from "../../../Components/Publications/RecommendedReadings/RecommendedReadings";
import PreLoader from "../../../Components/Shared/PreLoader/PreLoader";
const Recommended = () => {
  const [isLoading, books] = useFetch("/books");
  // console.log(books);
  return <>{books.length > 0 ? <RecommendedReadings isLoading={isLoading} booksData={books} /> : <PreLoader />}</>;
};

export default Recommended;

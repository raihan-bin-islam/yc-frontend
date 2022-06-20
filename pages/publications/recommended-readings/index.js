import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
import RecommendedReadings from "../../../Components/Publications/RecommendedReadings/RecommendedReadings";
import PreLoader from "../../../Components/Shared/PreLoader/PreLoader";
const Recommended = () => {
  // const [isLoading, books] = useFetch("/books");
  const [isLoading, recommendedReadings] = useFetch("/publications?category=recommended_readings");
  console.log(recommendedReadings);
  // console.log(books);
  return (
    <>
      {recommendedReadings.length > 0 ? (
        <RecommendedReadings isLoading={isLoading} booksData={recommendedReadings} />
      ) : (
        <PreLoader />
      )}
    </>
  );
};

export default Recommended;

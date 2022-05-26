import React from "react";
import RecommendedReadings from "../../../Components/Publications/RecommendedReadings/RecommendedReadings";
import useFetch from "../../../Components/Hooks/useFetch";
import BooksSlider from "../../../Components/Publications/RecommendedReadings/BooksSlider/BooksSlider";
const Recommended = () => {
  const [isLoading, books] = useFetch("/books");
  console.log(books);
  return (
    <>
      <RecommendedReadings />
      <BooksSlider isLoading={isLoading} booksData={books} />
    </>
  );
};

export default Recommended;

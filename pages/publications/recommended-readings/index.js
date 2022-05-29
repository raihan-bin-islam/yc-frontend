import React from "react";
import Hero from "../../../Components/Publications/RecommendedReadings/Hero/Hero";
import useFetch from "../../../Components/Hooks/useFetch";
import BooksSlider from "../../../Components/Publications/RecommendedReadings/BooksSlider/BooksSlider";
const Recommended = () => {
  const [isLoading, books] = useFetch("/books");
  // console.log(books);
  return (
    <>
      <Hero />
      <BooksSlider isLoading={isLoading} booksData={books} />
    </>
  );
};

export default Recommended;

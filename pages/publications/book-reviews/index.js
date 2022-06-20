import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
import Hero from "../../../Components/Publications/BookReviews/Hero/Hero";
import Reviews from "../../../Components/Publications/BookReviews/Reviews/Reviews";
import BreadCrumb from "../../../Components/Shared/BreadCrumb/BreadCrumb";
import bookReviews from "../../../staticPageData/publications/bookReviews.json";

const BookReviewsPage = () => {
  const [isLoading, bookReviews] = useFetch("/book-reviews");
  return (
    <>
      <Hero />
      {bookReviews.length > 0 && <Reviews reviews={bookReviews} />}
    </>
  );
};

export default BookReviewsPage;

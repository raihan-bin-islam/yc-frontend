import React from "react";
import Hero from "../../../Components/Publications/BookReviews/Hero/Hero";
import Reviews from "../../../Components/Publications/BookReviews/Reviews/Reviews";
import bookReviews from "../../../staticPageData/publications/bookReviews.json";

const BookReviewsPage = () => {
  return (
    <>
      <Hero />
      <Reviews reviews={bookReviews} />
    </>
  );
};

export default BookReviewsPage;

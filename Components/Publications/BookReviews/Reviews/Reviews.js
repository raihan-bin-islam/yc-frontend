import React from "react";
import ReviewComponent from "./ReviewComponent/ReviewComponent";
import { reviewSection } from "./reviews.module.scss";
import { reviews } from "./data";

const Reviews = () => {
  return (
    <section className={reviewSection}>
      {reviews.map(({ id, review, author }) => {
        return <ReviewComponent key={id} review={review} author={author} left />;
      })}
    </section>
  );
};

export default Reviews;

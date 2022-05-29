import React from "react";
import {
  reviewContainer,
  flipLeft,
  reviewTextContainer,
  reviewParagraph,
  authorText,
} from "./reviewComponent.module.scss";

const ReviewComponent = ({ review, author, left }) => {
  return (
    <div className={reviewContainer}>
      <div className={`${reviewTextContainer} ${left && flipLeft}`}>
        <p className={reviewParagraph}>{review}</p>
      </div>
      <h4 className={authorText}>- {author}</h4>
    </div>
  );
};

export default ReviewComponent;

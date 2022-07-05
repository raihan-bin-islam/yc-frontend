import React, { useState } from "react";
import ReviewComponent from "./ReviewComponent/ReviewComponent";
import { reviewSection, reviewContainer, leafSvg } from "./reviews.module.scss";
// import { reviews } from "./data";
import Pagination from "../../../Shared/Pagination/Pagination";
import LeafSvg from "../../../Shared/CommonSvg/LeafSvg";

const Reviews = ({ reviews }) => {
  const [startOffset, setStartOffset] = useState(1);
  const [endOffset, setEndOffset] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const contentsPerPage = 4;

  const handlePageClick = (e) => {
    const pageNumber = e.selected;
    setStartOffset(contentsPerPage * pageNumber + 1);
    setEndOffset(contentsPerPage * pageNumber + contentsPerPage);
    setCurrentPage(pageNumber + 1);
  };

  return (
    <section className={reviewSection}>
      <div className={reviewContainer}>
        {reviews
          .filter((data, index) => index + 1 >= startOffset && index < endOffset)
          .map(({ id, review, author }, index) => {
            return index % 2 == 0 ? (
              <ReviewComponent key={id} review={review} author={author} i={index} />
            ) : (
              <ReviewComponent key={id} review={review} author={author} left i={index} />
            );
          })}
        <Pagination
          length={reviews.length}
          contentsPerPage={contentsPerPage}
          onPageChange={handlePageClick}
          currentPage={currentPage}
        />
      </div>
      <LeafSvg className={leafSvg} />
    </section>
  );
};

export default Reviews;

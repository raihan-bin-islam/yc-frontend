import React from "react";
import ReactPaginate from "react-paginate";
import PaginationButton from "./PaginationButton";
import {
  paginationContainer,
  paginationLabels,
  pageActive,
  disabledLink,
  nextLabel,
  prevLabel,
  pageActiveTitle,
} from "./pagination.module.scss";

const Pagination = ({ length, contentsPerPage, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(length / contentsPerPage);
  return (
    <div>
      <ReactPaginate
        className={paginationContainer}
        pageLinkClassName={paginationLabels}
        activeLinkClassName={pageActive}
        previousLinkClassName={prevLabel}
        nextLinkClassName={nextLabel}
        disabledLinkClassName={disabledLink}
        breakLabel="....."
        nextLabel={<PaginationButton />}
        onPageChange={onPageChange}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={<PaginationButton />}
        renderOnZeroPageCount={null}
      />
      <h2 className={pageActiveTitle}>
        <strong>{currentPage}</strong> of <strong>{pageCount}</strong> pages
      </h2>
    </div>
  );
};

export default Pagination;

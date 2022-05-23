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
} from "./pagination.module.scss";

const Pagination = ({ length, contentsPerPage, onPageChange }) => {
  const pageCount = Math.ceil(length / contentsPerPage);
  return (
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
  );
};

export default Pagination;

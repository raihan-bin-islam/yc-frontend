import React, { useState } from "react";

const Pagination = ({ totalNumberOfData = 66 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const dataPerPage = 3;
  const pageLimit = 5;
  const totalNumberOfPages = totalNumberOfData / dataPerPage;

  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(pageLimit);

  const pageNumbers = () => {
    let pageArray = [];

    for (let index = 1; index <= totalNumberOfPages; index++) {
      pageArray.push(index);
    }

    return pageArray;
  };

  const handlePageTransition = (pageIndex) => {
    const endIndex = pageIndex - 1 + pageLimit;

    if (endIndex > totalNumberOfPages) {
      setStartIndex(totalNumberOfPages + 1 - pageLimit);
      setEndIndex(totalNumberOfPages);
      return;
    }
    setStartIndex(pageIndex);
    setEndIndex(pageIndex - 1 + pageLimit);
  };

  const pageArray = pageNumbers(totalNumberOfData);

  return (
    <>
      <div>
        {pageArray
          .filter((pageIndex, index) => index + 1 >= startIndex && index < endIndex)
          .map((pageIndex, index) => {
            return (
              <div key={index} onClick={() => handlePageTransition(pageIndex)}>
                {pageIndex}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Pagination;

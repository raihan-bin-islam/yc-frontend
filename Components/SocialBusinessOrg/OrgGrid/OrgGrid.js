import React, { useState } from "react";
import Pagination from "../../Shared/Pagination/Pagination";
import styles from "./orgGrid.module.scss";

const OrgGrid = ({ subHeadline, mainHeadline, orgData, countPerPage }) => {
  // styles
  const { orgGridContainer, orgGridHeader, orgGridBody, orgGridBodyCard, paginateContainer } = styles;

  // paginate
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const contentsPerPage = countPerPage;

  const handlePageClick = (e) => {
    const currentPage = e.selected;
    setStartOffset(contentsPerPage * currentPage);
    setEndOffset(contentsPerPage * (currentPage + 1));
    setCurrentPage(currentPage + 1);
  };

  return (
    <section className={orgGridContainer}>
      {/*profit section */}
      <div className={orgGridHeader}>
        <h3>{!subHeadline ? "" : subHeadline}</h3>
        <h2>{!mainHeadline ? "" : mainHeadline}</h2>
      </div>
      <div className={orgGridBody}>
        {orgData &&
          orgData.slice(startOffset, endOffset).map((org, index) => (
            <a href={org.link} target="__blank" key={org.id}>
              <div key={`org_${index}`} className={orgGridBodyCard}>
                <img src={org.thumb_image} alt="organizations" />
              </div>
            </a>
          ))}
      </div>
      <div className={paginateContainer}>
        <Pagination
          length={orgData.length}
          contentsPerPage={contentsPerPage}
          onPageChange={handlePageClick}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default OrgGrid;

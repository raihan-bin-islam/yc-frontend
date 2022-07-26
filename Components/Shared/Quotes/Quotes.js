import React, { useState } from "react";
// Import styles from scss
import {
  pageSection,
  pageLayout,
  pageContent,
  titleContainer,
  pageTitle,
  titleHeading,
  desc,
  quotation,
  yunusImage,
} from "./quotes.module.scss";

import Pagination from "../Pagination/Pagination";

// Import Component
import Button from "../Button/Button";
import HeroBanner from "../HeroBanner/HeroBanner";
import QuotationSvg from "./QuotationSvg";

import Link from "next/link";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

const Quotes = ({ heading, title, quotes }) => {
  const [startOffset, setStartOffset] = useState(1);
  const [endOffset, setEndOffset] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const contentsPerPage = 3;

  const handlePageClick = (e) => {
    const pageNumber = e.selected;
    setStartOffset(contentsPerPage * pageNumber + 1);
    setEndOffset(contentsPerPage * pageNumber + contentsPerPage);
    setCurrentPage(pageNumber + 1);
  };

  return (
    <section className={pageSection}>
      <HeroBanner flipped />
      <BreadCrumb />
      <div className={titleContainer}>
        <h2 className={`${pageTitle} ${heading && titleHeading}`}>{title}</h2>
      </div>
      <div className={pageLayout}>
        <div className={pageContent}>
          <div className={desc}>
            {quotes &&
              quotes
                .filter((data, index) => index + 1 >= startOffset && index < endOffset)
                .map(({ id, quote }, index) => {
                  return (
                    <div key={id}>
                      <p className={quotes && quotation}>
                        <q>{quote}</q>
                        <br />
                        <br />
                      </p>
                      {index % 2 == 0 ? <QuotationSvg /> : <QuotationSvg right />}
                      <br />
                    </div>
                  );
                })}
          </div>

          <Pagination
            length={quotes.length}
            contentsPerPage={contentsPerPage}
            onPageChange={handlePageClick}
            currentPage={currentPage}
          />
          <Link href="/professor-yunus">
            <a>
              <Button text="Back" />
            </a>
          </Link>
        </div>

        <div className={yunusImage}>
          <img src="/assets/images/prof_yunus/subPage/profYunusTemplate.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Quotes;

import React from "react";
import styles from "./books.module.scss";
import HeroBanner from "../Shared/HeroBanner/HeroBanner";
// import booksData from "../../staticPageData/books.json";
import ycPath from "../../public/assets/images/media/books/yc_path.png";
import HeroBannerSmall from "../Shared/HeroBannerSmall/HeroBannerSmall";

const Books = ({ booksData }) => {
  const {
    booksContainer,
    booksContainerHeader,
    booksContainerBody,
    booksContainerFooter,
    booksGrid,
    bookGridCollection,
  } = styles;
  return (
    <section className={booksContainer}>
      <div className={booksContainerHeader}>
        {/* <HeroBanner/> */}
        <HeroBannerSmall title="books" subtitle="By Professor Muhammad Yunus" />
      </div>
      <div className={booksContainerBody}>
        <div className="container-layout">
          <div className={booksGrid}>
            {booksData.map((book, index) => (
              <div key={`books_${index}`}>
                <div className={bookGridCollection}>
                  <img src={book.thumb_image} alt="books" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={booksContainerFooter}>
        <img src={ycPath.src} alt="yc_path" />
      </div>
    </section>
  );
};

export default Books;

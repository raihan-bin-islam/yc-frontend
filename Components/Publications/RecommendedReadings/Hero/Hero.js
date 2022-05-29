import React from "react";
import HeroBanner from "../../../Shared/HeroBanner/HeroBanner";
import {
  container,
  heroContent,
  sectionTitle,
  bookDetailsContainer,
  bookDetails,
  author,
  details,
  booksCardSlider,
  bookCardContainer,
} from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={container}>
      <HeroBanner large />
      <div className={heroContent}>
        <h2 className={sectionTitle}>Recommended Readings</h2>
        <div className={bookDetailsContainer}>
          <img src="/assets/images/publications/recommended_readings/book.png" alt="" />
          <div className={bookDetails}>
            <div>
              <h3>Building Social Business</h3>
              <p className={author}>By Professor Muhammad Yunus</p>
            </div>
            <p className={details}>
              The University Press Limited Red Crescent House, Level 6 61 Motijheel C/A, Dhaka-1000 Ph#+88029565441.
              01917733741 info@uplbooks.com.bd
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

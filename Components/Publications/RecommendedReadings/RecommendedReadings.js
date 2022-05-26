import React from "react";
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";
import { container, sectionTitle } from "./recommended.module.scss";

const RecommendedReadings = () => {
  return (
    <section className={container}>
      <HeroBanner large />
      <h2 className={sectionTitle}>Recommended Readings</h2>
    </section>
  );
};

export default RecommendedReadings;

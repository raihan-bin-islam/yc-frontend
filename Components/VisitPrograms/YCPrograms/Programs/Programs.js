import React from "react";
// import styles
import { programsSection, programsContainer, programsSvg } from "./programs.module.scss";
// import components
import ProgramsCard from "./ProgramsCard/ProgramsCard";
import ProgramDetails from "./ProgramDetails/ProgramDetails";
// import data
import programs from "../../../../staticPageData/visitPrograms/ycPrograms/programs/programs.json";
import ProgramsBgSVg from "./ProgramsBgSVG/ProgramsBgSVg";

const Programs = () => {
  return (
    <section className={programsSection}>
      <ProgramsBgSVg className={programsSvg} />
      <div className={`${programsContainer} container-layout`}>
        {programs.map(({ title, details, image }, index) => {
          return (
            <>
              <ProgramsCard title={title} image={image} />
              <ProgramDetails details={details} handbook />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;

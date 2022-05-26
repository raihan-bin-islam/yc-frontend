import React from "react";
// import styles
import { programsSection, programsContainer, programsSvg, leafSvg } from "./programs.module.scss";
// import components
import ProgramsCard from "./ProgramsCard/ProgramsCard";
import ProgramDetails from "./ProgramDetails/ProgramDetails";

import ProgramsBgSVg from "./ProgramsBgSVG/ProgramsBgSVg";
import LeafSvg from "./LeafSvg/LeafSvg";

const Programs = ({ programs }) => {
  return (
    <section className={programsSection}>
      <ProgramsBgSVg className={programsSvg} />
      <div className={`${programsContainer} container-layout`}>
        {programs.map(({ link, title, details, image }, index) => {
          return (
            <React.Fragment key={index}>
              <ProgramsCard link={link} title={title} image={image} />
              <ProgramDetails details={details} handbook />
            </React.Fragment>
          );
        })}
      </div>
      <LeafSvg className={leafSvg} />
    </section>
  );
};

export default Programs;

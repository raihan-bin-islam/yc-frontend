import React from "react";
// import styles
import { programsSection, programsContainer, programsSvg, leafSvg } from "./programs.module.scss";
// import components
import ProgramsCard from "./ProgramsCard/ProgramsCard";
import ProgramDetails from "./ProgramDetails/ProgramDetails";

import ProgramsBgSVg from "./ProgramsBgSVG/ProgramsBgSVg";
import LeafSvg from "../CommonSvg/LeafSvg";

const Programs = ({ programs, handbook }) => {
  return (
    <section className={programsSection}>
      <ProgramsBgSVg className={programsSvg} />
      <div className={`${programsContainer} container-layout`}>
        {programs.map(({ id, title, desc, category, thumb_image, handbook }, index) => {
          return (
            <React.Fragment key={id}>
              <ProgramsCard link={category} title={title} image={thumb_image} />
              <ProgramDetails details={desc} handbook={handbook} />
            </React.Fragment>
          );
        })}
      </div>
      <LeafSvg className={leafSvg} />
    </section>
  );
};

export default Programs;

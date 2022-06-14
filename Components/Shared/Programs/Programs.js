import React from "react";
// import styles
import { programsSection, programsContainer, programsSvg, leafSvg } from "./programs.module.scss";
// import components
import ProgramsCard from "./ProgramsCard/ProgramsCard";
import ProgramDetails from "./ProgramDetails/ProgramDetails";

import ProgramsBgSVg from "./ProgramsBgSVG/ProgramsBgSVg";
import LeafSvg from "../CommonSvg/LeafSvg";

const Programs = ({ programs }) => {
  return (
    <section className={programsSection}>
      <ProgramsBgSVg className={programsSvg} />
      <div className={`${programsContainer} container-layout`}>
        {programs.map(({ id, title, desc, category, thumb_image, handbook, link }, index) => {
          return (
            <React.Fragment key={id}>
              <ProgramsCard sectionId={category} title={title} image={thumb_image} />
              <ProgramDetails details={desc} handbook={handbook} link={link} />
            </React.Fragment>
          );
        })}
      </div>
      <LeafSvg className={leafSvg} />
    </section>
  );
};

export default Programs;

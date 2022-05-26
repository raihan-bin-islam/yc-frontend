import React from "react";
import ButtonLight from "../../../Shared/Button/Button";

import { cardContainer, detailsContainer, cardText, handbookText, buttons } from "./programDetails.module.scss";

const ProgramDetails = ({ details, handbook }) => {
  return (
    <div className={cardContainer}>
      <p className={cardText}>{details}</p>
      <div>
        {handbook && <p className={handbookText}>To learn more, Download the Handbook</p>}
        <div className={buttons}>
          <ButtonLight text="Download Handbook" />
          <ButtonLight text="Apply Now" dark />
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;

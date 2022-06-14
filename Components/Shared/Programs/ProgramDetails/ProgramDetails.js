import Link from "next/link";
import React from "react";
import ButtonLight from "../../../Shared/Button/Button";

import { cardContainer, detailsContainer, cardText, handbookText, buttons } from "./programDetails.module.scss";

const ProgramDetails = ({ details, handbook, link }) => {
  return (
    <div className={cardContainer}>
      <p className={cardText}>{details}</p>
      <div>
        {handbook && <p className={handbookText}>To learn more, Download the Handbook</p>}
        <div className={buttons}>
          {handbook && (
            <a href={handbook} download target="__blank">
              <ButtonLight text="Download Handbook" />
            </a>
          )}
          <Link href={link ? link : ""}>
            <a>
              <ButtonLight text="Apply Now" dark />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;

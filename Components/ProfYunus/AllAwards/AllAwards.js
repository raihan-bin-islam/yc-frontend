import React, { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import AwardsCard from "../../Shared/AwardsCard/AwardsCard";
import ButtonLight from "../../Shared/Button/Button";

import { awardsSection, awardsContainer, buttonComponent } from "./allAwards.module.scss";

const AllAwards = ({ awardsData }) => {
  const [endOffset, setEndOffset] = useState(8);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    endOffset >= awardsData?.length ? setDisable(true) : setDisable(false);
  }, [awardsData, endOffset]);

  return (
    <section className={awardsSection}>
      <div className={awardsContainer}>
        {awardsData.slice(0, endOffset).map(({ id, title, thumb_image, year }) => {
          return <AwardsCard key={id} title={title} image={thumb_image} year={year} />;
        })}
      </div>
      <div className={buttonComponent} onClick={() => setEndOffset((prev) => prev + 8)}>
        <ButtonLight text="Load More" disabled={disable} />
      </div>
    </section>
  );
};

export default AllAwards;

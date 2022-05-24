import React from "react";
import trusteeData from "./trustees.json";
import trusteeBg from "../../../public/assets/images/about_us/trustee_path.png";

// COMPONENT
import TrusteeCard from "./TrusteeCard/TrusteeCard";
import PreLoader from "../../Shared/PreLoader/PreLoader";

// CSS
import styles from "./aboutTrustees.module.scss";

const AboutTrustees = ({ isLoading, data }) => {
  // CSS
  const {
    aboutTrusteesContainer,
    aboutTrusteesHeader,
    aboutTrusteesBody,
    aboutTrusteesPath,
  } = styles;

  return (
    <section className={aboutTrusteesContainer}>
      <div className={aboutTrusteesPath}>
        <img src={trusteeBg.src} alt="paths" />
      </div>
      <div className="container-layout">
        <div className={aboutTrusteesHeader}>
          <h2>board of trustees</h2>
        </div>
        <div className={aboutTrusteesBody}>
          {!isLoading ? (
            data.map(({ id, title, designation, description, thumb_image }) => (
              <TrusteeCard
                key={id}
                image={thumb_image}
                title={title}
                desc1={description}
                designation={designation}
              />
            ))
          ) : (
            <PreLoader />
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutTrustees;

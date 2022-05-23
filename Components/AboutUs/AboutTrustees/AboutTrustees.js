import React from "react";
import trusteeData from "./trustees.json";
import trusteeBg from "../../../public/assets/images/about_us/trustee_path.png";

// COMPONENT
import TrusteeCard from "./TrusteeCard/TrusteeCard";

// CSS
import styles from "./aboutTrustees.module.scss";

const AboutTrustees = () => {
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
          {trusteeData.map((trustee, index) => (
            <TrusteeCard
              key={`card_${index}`}
              image={trustee.profile_image}
              title={trustee.title}
              desc1={trustee.desc_1}
              desc2={trustee.desc_2}
              designation={trustee.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTrustees;

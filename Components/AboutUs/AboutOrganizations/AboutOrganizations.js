import React from "react";
import styles from "./aboutOrganizations.module.scss";
import orgData from "./organizations.json";
import orgBg from "../../../public/assets/images/about_us/orgBg.png";

import Link from "next/link";

const AboutOrganizations = () => {
  const { aboutOrgContainer, aboutOrgHeader, aboutOrgBody, aboutOrgCard, aboutOrgBg } = styles;
  return (
    <section className={aboutOrgContainer}>
      <div className={aboutOrgBg}>
        <img src={orgBg.src} alt="org-bg" />
      </div>
      <div className="container-layout">
        <div className={aboutOrgHeader}>
          <h3>sister</h3>
          <h2>organizations</h2>
        </div>
        <div className={aboutOrgBody}>
          {orgData.map((org, index) => (
            <a className={aboutOrgCard} href={org.link} target="__blank" key={`org_${index}`}>
              <img src={org.logo} alt="organizations" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutOrganizations;

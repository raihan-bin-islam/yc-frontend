import React from "react";

// COMPONENT
import PrincipleCard from "./principleCard/PrincipleCard";

// LAYOUT
import Layout from "../../Shared/CommonSvg/Layout";

// CSS
import styles from "./SocialBusinessPrinciples.module.scss";

const SocialBusinessPrinciples = () => {
  const {
    principleSection,
    headingContainer,
    principlesContainer,
    item,
    principleLayout,
    layoutContainer,
  } = styles;
  return (
    <section className={`${principleSection} container-layout`}>
      <div className={headingContainer}>
        <h1>7 principles</h1>
        <span>of Social Business</span>
      </div>
      <div className={principlesContainer}>
        <div className={item}>
          <PrincipleCard
            number="1"
            text="Business objective will be to overcome poverty, or one or more problems (such as education, health, technology access, and environment) which threaten people and society; not profit maximization."
          />
        </div>
        <div className={item}>
          <PrincipleCard
            number="2"
            text="Financial and economic sustainability."
          />
        </div>
        <div className={item}>
          <PrincipleCard
            number="3"
            text="Investors get back their investment amount only. No dividend is given beyond investment money."
          />
        </div>
        <div className={item}>
          <PrincipleCard
            number="4"
            text="When investment amount is paid back, company profit stays with the company for expansion and improvement."
          />
        </div>
        <div className={item}>
          <PrincipleCard
            number="5"
            text="Gender sensitive and environmentally conscious."
          />
        </div>
        <div className={item}>
          <PrincipleCard
            number="6"
            text="Workforce gets market wage with better working conditions."
          />
        </div>
        <div className={item}>
          <PrincipleCard number="7" text="do it with joy." textBold />
        </div>
      </div>
      <div className={principleLayout}>
        <Layout />
      </div>
    </section>
  );
};

export default SocialBusinessPrinciples;

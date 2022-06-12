import React from "react";

// COMPONENT
import PrincipleCard from "./principleCard/PrincipleCard";

// LAYOUT
import Layout from "../../Shared/CommonSvg/Layout";

// CSS
import styles from "./SocialBusinessPrinciples.module.scss";

const SocialBusinessPrinciples = ({ isLoading, principles }) => {
  const { principleSection, headingContainer, principlesContainer, item, principleLayout, layoutContainer } = styles;
  return (
    <section className={`${principleSection} container-layout`}>
      <div className={headingContainer}>
        <h1>7 principles</h1>
        <span>of Social Business</span>
      </div>
      <div className={principlesContainer}>
        {principles?.map(({ id, title, order }) => {
          return (
            <div className={item} key={id}>
              <PrincipleCard number={order} text={title} />
            </div>
          );
        })}
      </div>
      <div className={principleLayout}>
        <Layout />
      </div>
    </section>
  );
};

export default SocialBusinessPrinciples;

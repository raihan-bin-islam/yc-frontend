import React from "react";
import styles from "./AboutWhatWeDo.module.scss";

const AboutWhatWeDo = () => {
  // styles
  const { aboutWhatWeDoContainer, aboutHeader, aboutBody } = styles;
  return (
    <section className={aboutWhatWeDoContainer}>
      <div>
        <div className={aboutHeader}>
          <h2>what we do</h2>
        </div>
        <div className={`${aboutBody} container-layout`}>
          <p>
            Yunus Centre is a global think tank for Social Business created by
            Noble Peace Laureate Professor Muhammad Yunus. It acts as a one-stop
            resource centre, binding all Social Business operations globally and
            in Bangladesh. Yunus Centre strives to develop Social Business ideas
            and concepts into business solutions to help carry the legacy of the
            global movement. In addition, Yunus Centre works to amplify the
            exposure of Professor Yunus’s vision by partnering with academic
            institutions, providing educational programs, hosting communication
            events, and building social media presence and digital publications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutWhatWeDo;

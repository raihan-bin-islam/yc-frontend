import React from "react";

// CSS
import styles from "./aboutMissionVission.module.scss";

const AboutMissionVission = () => {
  const { container, mission, vission } = styles;

  return (
    <div className={`${container} container-layout`}>
      <div className={mission}>
        <h1>mission</h1>
        <p>
          Since October 2006, when Professor Yunus and Grameen Bank jointly
          received the Nobel Peace Prize, local and international interest in
          Professor Yunus’ work has continuously increased. In order to address
          this ever-growing attention, an organization aimed primarily at
          promoting and disseminating Professor Yunus’ philosophy, with a
          special focus on social business, was created in the form of the Yunus
          Secretariat.
        </p>
      </div>
      <div className={vission}>
        <h1>vission</h1>
        <p>
          Since October 2006, when Professor Yunus and Grameen Bank jointly
          received the Nobel Peace Prize, local and international interest in
          Professor Yunus’ work has continuously increased. In order to address
          this ever-growing attention, an organization aimed primarily at
          promoting and disseminating Professor Yunus’ philosophy, with a
          special focus on social business, was created in the form of the Yunus
          Secretariat.
        </p>
      </div>
    </div>
  );
};

export default AboutMissionVission;

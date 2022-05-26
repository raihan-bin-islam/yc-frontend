import React from "react";
import teamData from "./about_team.json";
import IconLinkedIn from "../../../public/linked_in.svg";
import halfwayPathBg from "../../../public/halfway_path.png";

// COMPONENT
import MemberCard from "./MemberCard/MemberCard";
import Preloader from "../../Shared/PreLoader/PreLoader";

// CSS
import styles from "./aboutTeam.module.scss";

const AboutTeam = ({ isLoading, data }) => {
  const { aboutTeamContainer, aboutTeamHeader, aboutTeamBody, halfwayPath } =
    styles;

  return (
    <section className={aboutTeamContainer}>
      <div className={aboutTeamHeader}>
        <h2>team</h2>
      </div>
      <div className={aboutTeamBody}>
        <div className={halfwayPath}>
          <img src={halfwayPathBg.src} alt="half-way-path" />
        </div>
        {!isLoading ? (
          data.map(({ id, link, thumb_image, title, designation }) => (
            <MemberCard
              key={id}
              title={title}
              image={thumb_image}
              linkedIn={link}
              designation={designation}
            />
          ))
        ) : (
          <Preloader />
        )}
      </div>
    </section>
  );
};

export default AboutTeam;

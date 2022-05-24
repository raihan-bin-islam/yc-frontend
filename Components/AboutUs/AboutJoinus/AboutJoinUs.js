import React, { useState } from "react";
import styles from "./aboutjoinus.module.scss";
import joinBg from "../../../public/assets/images/about_us/joinus_path.png";
import joinTeam from "../../../public/assets/images/about_us/join_team.png";
import AboutForm from "./AboutForm/AboutForm";

const AboutJoinUs = () => {
  const {
    aboutJoinUsContainer,
    aboutJoinLeft,
    aboutJoinRight,
    aboutJoinBg,
    aboutJoinRightHeader,
    aboutJoinBody,
    aboutJoinRightBody,
    aboutJoinRightBodyForm,
    aboutJoinRightFooter,
  } = styles;

  // states
  const [isSubmit, setIsSubmit] = useState(false);

  // events
  const handleIsSubmit = () => {
    setIsSubmit(true);
  };

  const handleCancel = () => {
    setIsSubmit(false);
  };
  return (
    <section className={aboutJoinUsContainer}>
      <div className={aboutJoinBg}>
        <img src={joinBg.src} alt="join-us" />
      </div>
      <div className="container-layout">
        <div className={aboutJoinBody}>
          <div className={aboutJoinLeft}>
            <img src={joinTeam.src} alt="join-team" />
          </div>
          <div className={aboutJoinRight}>
            <div className={aboutJoinRightHeader}>
              <h2>join us</h2>
            </div>
            {!isSubmit && (
              <div className={aboutJoinRightBody}>
                <p>
                  Yunus Centre seeks like-minded individuals who are driven by a
                  strong sense of purpose, creation and passion for excellence.
                  If you want to be part of a strong, diverse team that has the
                  potential to redefine the large and tune in with rapidly
                  growing industry then join us.
                </p>
                <button onClick={handleIsSubmit}>submit your CV</button>
              </div>
            )}
            <div className={aboutJoinRightBodyForm}>
              {isSubmit && <AboutForm />}
            </div>
            {isSubmit && (
              <div className={aboutJoinRightFooter}>
                <p onClick={handleCancel}>Cancel</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJoinUs;

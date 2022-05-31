import React from "react";
import ButtonLight from "../../../Shared/Button/Button";
import LeafSvg from "../../../Shared/CommonSvg/LeafSvg";
import HeroBanner from "../../../Shared/HeroBanner/HeroBanner";
import {
  heroContainer,
  heroImageContainer,
  sectionTitle,
  magazineContainer,
  magazineTitle,
  buttonContainer,
  leafSvg,
} from "./hero.module.scss";
const Hero = () => {
  return (
    <section className={heroContainer}>
      <HeroBanner large />
      <div className={heroImageContainer}>
        <h2 className={sectionTitle}>Interns magazine</h2>
        <p>
          YC Intern Magazine basically gives you the idea about the internship program. This magazine tells the stories
          about the experience of the interns during the internship period. They talk about themselves, talk about the
          visiting fields and meetings. Exploring the new culture of Bangladesh; adapting with the people and lot more.
          So to know more about the Internship program check our YC Intern Magazine.
        </p>
        <div className={magazineContainer}>
          <img src="/assets/images/publications/interns_magazine/interns-magazine-banner.png" alt="" />
          <h5 className={magazineTitle}>Yunus Centre Interns Magazine #03</h5>
          <div className={buttonContainer}>
            <ButtonLight text="Read" />
            <ButtonLight text="Download" />
          </div>
        </div>
      </div>
      <LeafSvg className={leafSvg} />
    </section>
  );
};

export default Hero;

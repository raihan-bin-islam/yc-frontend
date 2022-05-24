import Link from "next/link";
import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";

import heroYunus from "../../../public/assets/images/prof_yunus/prof_yunus.png";
import styles from "./heroWithLinks.module.scss";

const HeroWithLinks = ({ linksData, bannerImage, capitalize }) => {
  const { headerHero, heroBody, heroImageContainer, links, capitalLinkText } = styles;

  return (
    <section className={headerHero}>
      <HeroBanner large />
      <div className={heroBody}>
        <div className={heroImageContainer}>
          <img src={bannerImage.src} alt="hero-banner" />
          {/* Links */}
          <ul className={links}>
            {linksData.map(({ link, linkText }, index) => {
              return (
                <li key={index}>
                  <Link href={link}>
                    <a className={capitalize ? capitalLinkText : ""}>{linkText}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroWithLinks;

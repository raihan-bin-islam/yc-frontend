import React from "react";
import Link from "next/link";
import styles from "./hero.module.scss";
import heroYunus from "../../../public/assets/images/prof_yunus/prof_yunus.png";
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

const Hero = () => {
  const { headerHero, heroBody, heroImageContainer, links } = styles;

  return (
    <section className={headerHero}>
      <HeroBanner large />
      <div className={heroBody}>
        <div className={heroImageContainer}>
          <img src={heroYunus.src} alt="hero-banner" />
          {/* Links */}
          <ul className={links}>
            {/* Link 1 */}
            <li>
              <Link href="/professor-yunus/about-professor-yunus">
                <a>About Professor Yunus</a>
              </Link>
            </li>
            {/* Link 2 */}
            <li>
              <Link href="/professor-yunus/vision">
                <a>Vision</a>
              </Link>
            </li>
            {/* Link 3 */}
            <li>
              <Link href="/professor-yunus/wish-list">
                <a>Wish list</a>
              </Link>
            </li>
            {/* Link 4 */}
            <li>
              <Link href="#speeches">
                <a>Speeches</a>
              </Link>
            </li>
            {/* Link 5 */}
            <li>
              <Link href="/professor-yunus/quotes">
                <a>Quotes</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

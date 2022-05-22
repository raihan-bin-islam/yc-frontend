import React from "react";
import Link from "next/link";
import styles from "./hero.module.scss";
import heroImage from "../../../public/assets/images/landing_page/hero_path.png";
import heroYunus from "../../../public/assets/images/prof_yunus/prof_yunus.png";

const Hero = () => {
  const { headerHero, heroBanner, heroBody, heroImageContainer, links } = styles;

  //  <ul className={dropdown}>
  //    <Link href="/professor-yunus/about-professor-yunus">
  //      <li>About</li>
  //    </Link>
  //    <Link href="/professor-yunus/vision">
  //      <li>Vision</li>
  //    </Link>
  //    <Link href="/professor-yunus/wishlist">
  //      <li>Wish list</li>
  //    </Link>
  //    <Link href="/professor-yunus/quotes">
  //      <li>Quotes</li>
  //    </Link>
  //  </ul>;
  return (
    <section className={headerHero}>
      <div className={heroBanner}>
        <img className="animateBanner" src={heroImage.src} alt="hero-banner" />
      </div>
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

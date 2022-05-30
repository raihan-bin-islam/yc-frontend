import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import ycLogo from "../../../public/yunus_center.png";
import iconMap from "../../../public/icon_map.svg";
import iconMail from "../../../public/icon_mail.svg";
import mediaFb from "../../../public/media_fb.svg";
import mediaLinkedin from "../../../public/media_linkedin.svg";
import mediaInsta from "../../../public/media_insta.svg";
import mediaTwitter from "../../../public/media_twitter.svg";

const Footer = () => {
  // styles
  const {
    footerSection,
    footerBody,
    footerBodyLeft,
    footerBodyCenter,
    footerBodyRight,
    footerBottom,
    mailHeading,
    socialMedia,
    footerCrafted,
  } = styles;

  return (
    <footer className={footerSection}>
      <div className="container-layout">
        <div className={footerBody}>
          <div className={footerBodyLeft}>
            <img src={ycLogo.src} alt="yc-logo" />
            <p>
              Founded in July 2008 by Professor Muhammad Yunus, Yunus Centre is a think tank to promote and disseminate
              the work and philosophy of Professor Muhammad Yunus for issues relating to the concept and practice of
              Social Business.
            </p>
          </div>
          <div className={footerBodyCenter}>
            <div>
              <div>
                <h5>
                  <span>
                    <img src={iconMap.src} alt="map-icon" />
                  </span>{" "}
                  Find Us at
                </h5>
                <div className="mt3">
                  <p>16th Floor</p>
                  <p>Grameen Bank Bhaban</p>
                  <p>Mirpur 2, Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="mt4">
                <h5 className={mailHeading}>
                  <span>
                    <img src={iconMail.src} alt="mail-icon" />
                  </span>{" "}
                  Email to Us
                </h5>
                <div className="mt2">
                  <p>info@yunuscentre.org</p>
                </div>
              </div>
            </div>
          </div>
          <div className={footerBodyRight}>
            <div>
              <h3>Newsletter</h3>
              <div className="mt4">
                <p className="bold">Join our mailing list!</p>
                <p>Sign up to get insights from the </p>
                <p>Global Hub for Social Business</p>
              </div>
              <div className="mt4">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className={footerBottom}>
          <div>
            <p>© Yunus Centre - 2022</p>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/media-kit">
                  <a target='_blank'>Media Kit</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a target="_blank">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <a href="/" target="_blank">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Social Business FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className={socialMedia}>
            <a href="/" target="_blank">
              <img src={mediaFb.src} alt="media" />
            </a>
            <a href="/" target="_blank">
              <img src={mediaLinkedin.src} alt="media" />
            </a>
            <a href="/" target="_blank">
              <img src={mediaInsta.src} alt="media" />
            </a>
            <a href="/" target="_blank">
              <img src={mediaTwitter.src} alt="media" />
            </a>
          </div>
        </div>
        <div className={footerCrafted}>
          <p>Crafted with JoYY by YY Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
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
    textField,
    checkBoxInput,
    submitButton,
    animateMount,
    animateDismount,
    cancelButton,
    footerBottom,
    mailHeading,
    socialMedia,
    footerCrafted,
  } = styles;

  // State variable to show or hide the form fields
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // const email = e.target[0].value;
    // const terms = e.target[3].value;
    // If the user accepts the terms and conditions only then post the data
    if (terms) {
      console.log(email);
      const formData = new FormData();
      formData.append("email", email);
    }
  };

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

              {/* Subscribe Form */}
              <div className="mt4">
                {/* Input Field */}
                <form action="POST" onSubmit={handleSubmit}>
                  {showForm && (
                    <input
                      className={textField}
                      type="text"
                      name="subscriber"
                      placeholder="Please Enter Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  )}

                  {/* Subscribe Button */}
                  {!showForm && (
                    <button
                      className={`${submitButton} ${showForm ? animateMount : animateDismount}`}
                      type="button"
                      onClick={() => {
                        setShowForm(true);
                      }}
                    >
                      Subscribe
                    </button>
                  )}
                  {/* Sign up button */}
                  {showForm && (
                    <button className={`${submitButton} ${showForm ? animateMount : animateDismount}`} type="submit">
                      Sign Up
                    </button>
                  )}
                  {/* Cancel Button */}
                  {showForm && (
                    <>
                      <button className={cancelButton} onClick={() => setShowForm(false)}>
                        cancel
                      </button>
                      {/* Checkbox Input */}
                      <div className={checkBoxInput}>
                        <input
                          id="terms"
                          type="checkbox"
                          name="terms"
                          checked={terms}
                          onChange={() => setTerms(!terms)}
                        />
                        <label htmlFor="terms">I have read and accept terms & conditions</label>
                      </div>
                    </>
                  )}
                </form>
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
                  <a>Media Kit</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/social-business/faq">
                  <a>Social Business FAQs</a>
                </Link>
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

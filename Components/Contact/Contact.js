import React from "react";
import dynamic from "next/dynamic";

// COMPONENTS
import HeroBannerSmall from "../Shared/HeroBannerSmall/HeroBannerSmall";
import ContactForm from "./ContactForm/ContactForm";

// LAYOUT
import RightLayout from "../Shared/CommonSvg/RightLayout";
import LeafSvg from "../Shared/CommonSvg/LeafSvg";

// MAP

// CSS
import styles from "./Contact.module.scss";

const Contact = () => {
  const { contactContainer, contactHeader, contactBody, mapContainer, formContainer, layoutContainer, leafContainer } =
    styles;

  return (
    <div className={contactContainer}>
      <div className={contactHeader}>
        <HeroBannerSmall title="contact" />
      </div>
      <div className={`${contactBody} container-layout`}>
        <div className={layoutContainer}>
          <RightLayout />
        </div>
        <div className={mapContainer}>
          {/* <MapWithNoSSR /> */}
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Grameen%20Bank%20Head%20Office,%205%20Mirpur%20Rd,%20Dhaka%201216&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
        <div className={formContainer}>
          <ContactForm />
        </div>
      </div>
      <div className={leafContainer}>
        <LeafSvg />
      </div>
    </div>
  );
};

export default Contact;

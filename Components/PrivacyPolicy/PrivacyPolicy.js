import React from "react";

// COMPONENTS
import HeroBanner from "../Shared/HeroBanner/HeroBanner";
import HeroBannerSmall from "../Shared/HeroBannerSmall/HeroBannerSmall";
import LeafSvg from "../../Components/Shared/CommonSvg/LeafSvg";

// CSS
import styles from "./privacy.module.scss";

const PrivacyPolicy = () => {
  //styles
  const {
    policyContainer,
    policyContainerHeader,
    policyContainerBody,
    policyContainerBodyTitle,
    policyContainerBodyContent,
    policyContainerFooter,
    layoutContainer,
  } = styles;

  return (
    <section className={policyContainer}>
      <div className={policyContainerHeader}>
        <HeroBannerSmall title="privacy policy" />
      </div>
      {/*  */}
      <div className={`${policyContainerBody} container-layout`}>
        <div className={layoutContainer}>
          <LeafSvg />
        </div>

        <h1>Privacy Policy for Yunus Centre</h1>
        <div className={policyContainerBodyContent}>
          <p>
            At Yunus Centre, accessible from www.yunuscentre.org, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Yunus Centre and how we use it.{" "}
          </p>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.{" "}
          </p>
          <h3>Consent</h3>
          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collected in Yunus Centre. This policy is
            not applicable to any information collected offline or via channels
            other than this website.{" "}
          </p>
        </div>
      </div>
      <div className={policyContainerFooter}></div>
    </section>
  );
};

export default PrivacyPolicy;

import React from "react";

// COMPONENT
import ButtonLight from "../../Shared/Button/Button";

// IMAGE
import conceptLayout from "../../../public/assets/images/social_business/concept_path.png";
import conceptImage from "../../../public/assets/images/social_business/concept_image.png";
import conceptLayout1 from "../../../public/assets/images/social_business/layout_1.png";
import conceptLayout2 from "../../../public/assets/images/social_business/layout_2.png";
import conceptLayout3 from "../../../public/assets/images/social_business/layout_3.png";
// CSS
import styles from "./socialBusinessConcept.module.scss";

// Next Link
import Link from "next/link";
import useScrollReveal from "../../Hooks/useScrollReveal";

const SocialBusinessConcept = () => {
  const {
    conceptSection,
    layoutContainer,
    conceptBanner,
    conceptBox,
    conceptBoxLeft,
    conceptBoxRight,
    conceptImg,
    imageContainer,
    largePara,
    smallPara,
    btnContainer,
    layoutContainer1,
  } = styles;

  const { revealFromLeft, revealFromRight } = useScrollReveal("sb__concept");

  return (
    <section className={conceptSection}>
      <div className={layoutContainer}>
        <img className={conceptBanner} src={conceptLayout.src} alt="concept layout" />
      </div>
      <div className={`${conceptBox} container-layout`}>
        <div className={conceptBoxLeft}>
          <div className={imageContainer}>
            <img className={`${conceptImg} ${revealFromLeft}`} src={conceptImage.src} alt="concept image" />
          </div>
        </div>
        <div className={`${conceptBoxRight} ${revealFromRight}`}>
          <h1>concept of social business</h1>
          <p className={largePara}>
            Social business is a cause-driven business. In a social business, the investors/owners can gradually recoup
            the money invested, but cannot take any dividend beyond that point. Purpose of the investment is purely to
            achieve one or more social objectives through the operation of the company, no personal gain is desired by
            the investors. The company must cover all costs and make profit, at the same time achieve the social
            objective, such as, healthcare for the poor, housing for the poor, financial services for the poor,
            nutrition for malnourished children, providing safe drinking water, introducing renewable energy, etc. in a
            business way.
          </p>
          <p className={smallPara}>
            The impact of the business on people or environment, rather the amount of profit made in a given period
            measures the success of social business. Sustainability of the company indicates that it is running as a
            business. The objective of the company is to achieve social goals.
          </p>
          <div className={btnContainer}>
            <Link href="/social-business/concept-detail">
              <a>
                <ButtonLight text="Read More" dark />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={layoutContainer1}>
        <div className={imageContainer}>
          <img src={conceptLayout1.src} alt="layout 1" />
        </div>
        <div className={imageContainer}>
          <img src={conceptLayout2.src} alt="layout 2" />
        </div>
        <div className={imageContainer}>
          <img src={conceptLayout3.src} alt="layout 3" />
        </div>
      </div>
    </section>
  );
};

export default SocialBusinessConcept;

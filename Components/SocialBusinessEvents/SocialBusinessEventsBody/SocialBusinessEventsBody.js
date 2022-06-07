import React from "react";
import Link from "next/link";

// COMPONENTS
import Sliders from "../../Shared/Slider/Slider";
import ButtonLight from "../../Shared/Button/Button";

// LAYOUT
import LeftLayout from "../../Shared/CommonSvg/LeftLayout";
import Layout from "../../Shared/CommonSvg/Layout";
import yunusLeaf from "../../../public/assets/images/social_business/yunus_leaf.png";

// CSS
import styles from "./SocialBusinessEventsBody.module.scss";
import useFetch from "../../Hooks/useFetch";

const SocialBusinessEventsBody = () => {
  const [latestEventsIsLoading, latestEventsData] = useFetch("/events/latest");
  const [pastEventsIsLoading, pastEventsData] = useFetch("/events/past");
  const { eventsBody, latestEvents, pastEvents, sliderContainer, btnContainer, leafContainer, layoutContainer } =
    styles;

  return (
    <div className={eventsBody}>
      <div className={layoutContainer}>
        <LeftLayout />
      </div>
      <div className={`${latestEvents} container-layout`}>
        <h1>latest</h1>
        <div className={sliderContainer}>
          <Sliders cardType="events" sliderData={latestEventsData} />
        </div>
      </div>
      <div className={`${pastEvents} container-layout`}>
        <h1>past</h1>
        <div className={sliderContainer}>
          <Sliders cardType="events" sliderData={pastEventsData} />
        </div>
        <div className={btnContainer}>
          <Link href="/social-business/events/past-events">
            <a>
              <ButtonLight text="See All" />
            </a>
          </Link>
        </div>
      </div>
      <div className={leafContainer}>
        <Layout />
      </div>
    </div>
  );
};

export default SocialBusinessEventsBody;

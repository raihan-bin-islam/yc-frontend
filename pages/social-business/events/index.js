import React from "react";

// COMPONENTS
import SocialBusinessEventsHeader from "../../../Components/SocialBusinessEvents/SocialBusinessEventsHeader/SocialBusinessEventsHeader";
import SocialBusinessEventsBody from "../../../Components/SocialBusinessEvents/SocialBusinessEventsBody/SocialBusinessEventsBody";
import useFetch from "../../../Components/Hooks/useFetch";

const Events = () => {
  const [latestEventsIsLoading, latestEventsData] = useFetch("/events/latest");
  const [pastEventsIsLoading, pastEventsData] = useFetch("/events/past");
  return (
    <div>
      <SocialBusinessEventsHeader />
      <SocialBusinessEventsBody latestEventsData={latestEventsData} pastEventsData={pastEventsData} />
    </div>
  );
};

export default Events;

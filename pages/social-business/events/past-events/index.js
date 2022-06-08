import React, { useState, useEffect } from "react";

// COMPONENTS
import SocialBusinessPastEventsHeader from "../../../../Components/SocialBusinessPastEvents/SocialBusinessPastEventsHeader/SocialBusinessPastEventsHeader";
import SocialBusinessPastEventsBody from "../../../../Components/SocialBusinessPastEvents/SocialBusinessPastEventsBody/SocialBusinessPastEventsBody";
import useFetch from "../../../../Components/Hooks/useFetch";

const PastEvents = () => {
  const [isLoading, pastEvents] = useFetch("/events/year-wise");

  const [pastEventsYearWise, setPastEventsYearWise] = useState([]);

  useEffect(() => {
    setPastEventsYearWise(pastEvents.reverse());
  }, [pastEvents]);

  return (
    <div>
      <SocialBusinessPastEventsHeader />
      {pastEvents.length > 0 && <SocialBusinessPastEventsBody pastEventsYearWise={pastEventsYearWise} />}
    </div>
  );
};

export default PastEvents;

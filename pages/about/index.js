import React from "react";

// COMPONENTS
import AboutDoGrid from "../../Components/AboutUs/AboutDoGrid/AboutDoGrid";
import AboutMissionVission from "../../Components/AboutUs/AboutMissionVission/AboutMissionVission";
import AboutJoinUs from "../../Components/AboutUs/AboutJoinus/AboutJoinUs";
import AboutOrganizations from "../../Components/AboutUs/AboutOrganizations/AboutOrganizations";
import AboutTeam from "../../Components/AboutUs/AboutTeam/AboutTeam";
import AboutTrustees from "../../Components/AboutUs/AboutTrustees/AboutTrustees";
import AboutWhatWeDo from "../../Components/AboutUs/AboutWhatWeDo/AboutWhatWeDo";
import Hero from "../../Components/AboutUs/Hero/Hero";

import useFetch from "../../Components/Hooks/useFetch";

const About = () => {
  const [wwDoIsLoading, wwDoData] = useFetch("/what-we-do");
  const [botIsLoading, botData] = useFetch("/board-of-trustees");
  const [tmIsLoading, tmData] = useFetch("/team-member");

  return (
    <>
      <Hero />
      <AboutMissionVission />
      <AboutWhatWeDo />
      {wwDoData.length > 0 && (
        <AboutDoGrid isLoading={wwDoIsLoading} data={wwDoData} />
      )}
      {botData.length > 0 && (
        <AboutTrustees isLoading={botIsLoading} data={botData} />
      )}
      {tmData.length > 0 && <AboutTeam isLoading={tmIsLoading} data={tmData} />}
      <AboutOrganizations />
      <AboutJoinUs />
    </>
  );
};

export default About;

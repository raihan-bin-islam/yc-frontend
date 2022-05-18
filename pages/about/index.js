import React from "react";
import AboutDoGrid from "../../Components/AboutUs/AboutDoGrid/AboutDoGrid";
import AboutJoinUs from "../../Components/AboutUs/AboutJoinus/AboutJoinUs";
import AboutOrganizations from "../../Components/AboutUs/AboutOrganizations/AboutOrganizations";
import AboutTeam from "../../Components/AboutUs/AboutTeam/AboutTeam";
import AboutTrustees from "../../Components/AboutUs/AboutTrustees/AboutTrustees";
import AboutWhatWeDo from "../../Components/AboutUs/AboutWhatWeDo/AboutWhatWeDo";
import Hero from "../../Components/AboutUs/Hero/Hero";

const About = () => {
  return <>
    <Hero />
    <AboutWhatWeDo />
    <AboutDoGrid />
    <AboutTrustees />
    <AboutTeam />
    <AboutOrganizations/>
    <AboutJoinUs/>
  </>;
};

export default About;

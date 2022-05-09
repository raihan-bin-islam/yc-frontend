import React from "react";
import AboutDoGrid from "../../Components/AboutUs/AboutDoGrid/AboutDoGrid";
import AboutWhatWeDo from "../../Components/AboutUs/AboutWhatWeDo/AboutWhatWeDo";
import Hero from "../../Components/AboutUs/Hero/Hero";

const About = () => {
  return <>
    <Hero />  
    <AboutWhatWeDo/>
    <AboutDoGrid/>
  </>;
};

export default About;

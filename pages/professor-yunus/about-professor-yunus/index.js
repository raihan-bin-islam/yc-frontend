import React from "react";
import ProfYunusSubPages from "../../../Components/Shared/ProfYunusSubPages/ProfYunusSubPages";
import pageData from "../../../static/pageData/profYunus/about/pageData.json";
const ProfYunusAbout = () => {
  const { name, title, desc } = pageData;
  return <ProfYunusSubPages name={name} title={title} description={desc} />;
};

export default ProfYunusAbout;

import React from "react";
import ProfYunusSubPages from "../../../Components/Shared/ProfYunusSubPages/ProfYunusSubPages";
import pageData from "../../../static/pageData/profYunus/vision/pageData.json";
const ProfYunusVision = () => {
  const { title, desc } = pageData;
  return <ProfYunusSubPages heading title={title} description={desc} />;
};

export default ProfYunusVision;

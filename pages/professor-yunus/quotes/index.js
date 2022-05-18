import React from "react";
import ProfYunusSubPages from "../../../Components/Shared/ProfYunusSubPages/ProfYunusSubPages";
import pageData from "../../../static/pageData/profYunus/quotes/pageData.json";

const ProfYunusQuotes = () => {
  const { title, quotes } = pageData;
  return <ProfYunusSubPages heading title={title} description={quotes} quotes />;
};

export default ProfYunusQuotes;

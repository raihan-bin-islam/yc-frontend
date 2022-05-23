import React from "react";
import ProfYunusSubPages from "../../../Components/Shared/ProfYunusSubPages/ProfYunusSubPages";
import Quotes from "../../../Components/Shared/Quotes/Quotes";
import pageData from "../../../staticPageData/pageData/profYunus/quotes/pageData.json";

const ProfYunusQuotes = () => {
  const { title, quotes } = pageData;
  return <Quotes heading title={title} quotes={quotes} />;
};

export default ProfYunusQuotes;

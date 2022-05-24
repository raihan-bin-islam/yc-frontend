import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
import ProfYunusSubPages from "../../../Components/Shared/ProfYunusSubPages/ProfYunusSubPages";
import Quotes from "../../../Components/Shared/Quotes/Quotes";
import pageData from "../../../staticPageData/pageData/profYunus/quotes/pageData.json";

const ProfYunusQuotes = () => {
  const { title } = pageData;
  const [isLoading, quotes] = useFetch("/quotes");
  console.log(quotes);
  return <Quotes heading title={title} quotes={quotes} />;
};

export default ProfYunusQuotes;

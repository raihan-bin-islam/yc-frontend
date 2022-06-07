import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
import BreadCrumb from "../../../Components/Shared/BreadCrumb/BreadCrumb";
import Quotes from "../../../Components/Shared/Quotes/Quotes";
import pageData from "../../../staticPageData/profYunus/quotes/pageData.json";

const ProfYunusQuotes = () => {
  const { title } = pageData;
  const [isLoading, quotes] = useFetch("/quotes");
  return (
    <>
      <Quotes heading title={title} quotes={quotes} />
    </>
  );
};

export default ProfYunusQuotes;

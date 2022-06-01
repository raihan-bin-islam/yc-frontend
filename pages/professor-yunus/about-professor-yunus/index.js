import React from "react";
import ProfYunusSubPages from "../../../Components/Shared/ProfYunusSubPages/ProfYunusSubPages";
import pageData from "../../../staticPageData/profYunus/about/pageData.json";
const ProfYunusAbout = () => {
  const { name, title, desc } = pageData;
  return <ProfYunusSubPages name={name} title={title} description={desc} wishlist />;
};

export default ProfYunusAbout;

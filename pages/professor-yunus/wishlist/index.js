import React from "react";
import ProfYunusSubPages from "../../../Components/Shared/ProfYunusSubPages/ProfYunusSubPages";
import pageData from "../../../staticPageData/pageData/profYunus/wishlist/pageData.json";
const ProfYunusWishlist = () => {
  const { title, desc } = pageData;
  return <ProfYunusSubPages heading title={title} description={desc} />;
};

export default ProfYunusWishlist;

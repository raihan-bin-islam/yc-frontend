import React from "react";
import BreadCrumb from "../../../Components/Shared/BreadCrumb/BreadCrumb";
import ProfYunusSubPages from "../../../Components/Shared/ProfYunusSubPages/ProfYunusSubPages";
import pageData from "../../../staticPageData/profYunus/wishlist/pageData.json";
const ProfYunusWishlist = () => {
  const { title, desc } = pageData;
  return (
    <>
      <ProfYunusSubPages heading title={title} description={desc} wishlist />;
    </>
  );
};

export default ProfYunusWishlist;

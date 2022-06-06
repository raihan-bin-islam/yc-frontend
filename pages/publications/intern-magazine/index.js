import React from "react";

import InternsMagazine from "../../../Components/Publications/InternsMagazine/InternsMagazine";

import magazines from "../../../staticPageData/publications/magazines.json";

const InternMagazinePage = () => {
  return (
    <>
      <InternsMagazine isLoading={false} magazines={magazines} />
    </>
  );
};

export default InternMagazinePage;

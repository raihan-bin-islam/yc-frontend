import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
// Component
import Magazine from "../../../Components/Publications/Magazine/Magazine";
// Data
import magazines from "../../../staticPageData/publications/magazines.json";

const YCBrochure = () => {
  const [isLoading, ycBrochure] = useFetch("/publications?category=yc_brochure");
  return <>{ycBrochure.length > 0 && <Magazine title={`YC Brochure`} data={ycBrochure} />}</>;
};

export default YCBrochure;

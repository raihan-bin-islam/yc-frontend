import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
// Component
import Magazine from "../../../Components/Publications/Magazine/Magazine";
// Data
import magazines from "../../../staticPageData/publications/magazines.json";

const YCSpotlight = () => {
  const [isLoading, ycSpotlight] = useFetch("/publications?category=yc_spotlight");
  return <>{ycSpotlight.length > 0 && <Magazine title={`YC Brochure`} data={ycSpotlight} />}</>;
};

export default YCSpotlight;

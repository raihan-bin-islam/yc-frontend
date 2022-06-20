import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
// Component
import Magazine from "../../../Components/Publications/Magazine/Magazine";
// Data
import magazines from "../../../staticPageData/publications/magazines.json";

const InternMagazinePage = () => {
  const [isLoading, internMagazine] = useFetch("/publications?category=interns_magazine");
  return (
    <>{internMagazine.length > 0 && <Magazine title={`Interns Magazine`} isLoading={false} data={internMagazine} />}</>
  );
};

export default InternMagazinePage;

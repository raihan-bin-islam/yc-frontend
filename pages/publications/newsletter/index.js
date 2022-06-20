import React from "react";
import useFetch from "../../../Components/Hooks/useFetch";
// Component
import Magazine from "../../../Components/Publications/Magazine/Magazine";
// Data
import magazines from "../../../staticPageData/publications/magazines.json";

const Newsletter = () => {
  const [isLoading, newsletter] = useFetch("/publications?category=newsletter");

  return <>{newsletter.length > 0 && <Magazine title="Newsletter" data={newsletter} />}</>;
};

export default Newsletter;

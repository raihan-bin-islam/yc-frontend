import React from "react";
// Component
import Magazine from "../../../Components/Publications/Magazine/Magazine";
// Data
import magazines from "../../../staticPageData/publications/magazines.json";
// Hooks
import useFetch from "../../../Components/Hooks/useFetch";
const Booklet = () => {
  const [isLoading, booklets] = useFetch("/publications?category=booklet");
  return <>{booklets.length > 0 && <Magazine title="Booklet" data={booklets} />}</>;
};

export default Booklet;

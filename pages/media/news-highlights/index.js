import React from "react";

// COMPONENTS
import NewsHighlightsHeader from "../../../Components/NewsHighlights/NewsHighlightsHeader/NewsHighlightsHeader";
import NewsHighlightsBody from "../../../Components/NewsHighlights/NewsHighlightsBody/NewsHighlightsBody";

function newsHighlights(props) {
  return (
    <div>
      <NewsHighlightsHeader />
      <NewsHighlightsBody />
    </div>
  );
}

export default newsHighlights;

import React from "react";

// COMPONENTS
import SocialBusinessFaqHeader from "../../../Components/SocialBusinessFaq/SocialBusinessFaqHeader/SocialBusinessFaqHeader";
import SocialBusinessFaqBody from "../../../Components/SocialBusinessFaq/SocialBusinessFaqBody/SocialBusinessFaqBody";

import useFetch from "../../../Components/Hooks/useFetch";

const Faq = () => {
  const [isLoading, faqData] = useFetch("/faqs");
  return (
    <div>
      <SocialBusinessFaqHeader />
      <SocialBusinessFaqBody faqData={faqData} />
    </div>
  );
};

export default Faq;

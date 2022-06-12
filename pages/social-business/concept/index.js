import React from "react";

// SECTION COMPONENTS
import SocialBusinessHeader from "../../../Components/SocialBusiness/SocialBusinessHeader/SocialBusinessHeader";
import SocialBusinessConcept from "../../../Components/SocialBusiness/SocialBusinessConcept/SocialBusinessConcept";
import SocialBusinessPrinciples from "../../../Components/SocialBusiness/SocialBusinessPrinciples/SocialBusinessPrinciples";
import useFetch from "../../../Components/Hooks/useFetch";

const SocialBusiness = () => {
  const [isLoading, principles] = useFetch("/principles");
  return (
    <div>
      <SocialBusinessHeader />
      <SocialBusinessConcept />
      <SocialBusinessPrinciples principles={principles} />
    </div>
  );
};

export default SocialBusiness;

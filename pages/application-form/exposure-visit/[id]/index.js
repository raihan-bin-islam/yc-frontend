import React, { useEffect, useState } from "react";

import ExposureVisitForm from "../../../../Components/Forms/ExposureVisitForm/ExposureVisitForm";

import { useRouter } from "next/router";
import useDraftData from "../../../../Components/Hooks/useDraftData";

const ExposureVisit = () => {
  const router = useRouter();
  const { id } = router.query;

  const [draftData] = useDraftData(`/exposure-visit-application?app_id=${id}`, "exposure-visit");

  return <ExposureVisitForm draftData={draftData} />;
};

export default ExposureVisit;

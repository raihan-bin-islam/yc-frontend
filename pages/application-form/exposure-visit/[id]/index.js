import React from "react";

import ExposureVisitForm from "../../../../Components/Forms/ExposureVisitForm/ExposureVisitForm";

import { useRouter } from "next/router";

const ExposureVisit = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <ExposureVisitForm />
    </div>
  );
};

export default ExposureVisit;

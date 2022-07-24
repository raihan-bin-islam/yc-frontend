import React from "react";

import InternshipForm from "../../../../Components/Forms/InternshipForm/InternshipForm";

import { useRouter } from "next/router";

const Internship = () => {
  const router = useRouter();
  const { id } = router.query;

  const [draftData] = useDraftData(`/internship-program-application?app_id=${id}`, "internship-program");

  return <InternshipForm draftData={draftData} />;
};

export default Internship;

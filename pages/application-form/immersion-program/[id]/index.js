import React from "react";

import ImmersionForm from "../../../../Components/Forms/ImmersionForm/ImmersionForm";

import { useRouter } from "next/router";
import useDraftData from "../../../../Components/Hooks/useDraftData";

const ImmersionProgram = () => {
  const router = useRouter();
  const id = router.query;

  const [draftData] = useDraftData(`/immersion-program-application?app_id=${id}`, "immersion-program");

  return <ImmersionForm draftData={draftData} />;
};

export default ImmersionProgram;

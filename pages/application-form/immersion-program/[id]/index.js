import React from "react";

import ImmersionForm from "../../../../Components/Forms/ImmersionForm/ImmersionForm";

import { useRouter } from "next/router";

const ImmersionProgram = () => {
  const router = useRouter();
  const id = router.query;

  return <ImmersionForm />;
};

export default ImmersionProgram;

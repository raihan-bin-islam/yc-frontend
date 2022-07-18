import React from "react";

import InternshipForm from "../../../Components/Forms/InternshipForm/InternshipForm";

import { useRouter } from "next/router";

const Internship = () => {
  const router = useRouter();
  const { id } = router.query;

  return <InternshipForm />;
};

export default Internship;

import React from "react";
import SingleRejoinder from "../../../../Components/Media/SingleRejoinder/SingleRejoinder";
import { useRouter } from "next/router";
import useFetch from "../../../../Components/Hooks/useFetch";

const SingleRejoindersPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, newsData] = useFetch(`/rejoinders/${id}`);
  return <SingleRejoinder rejoinder={newsData} />;
};

export default SingleRejoindersPage;

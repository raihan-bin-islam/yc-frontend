import React from "react";
// components
import SingleNewsBody from "../../../../../Components/Media/SingleNews/SingleNewsBody/SingleNewsBody";
// hooks
import { useRouter } from "next/router";
import useFetch from "../../../../../Components/Hooks/useFetch";

import SingleNewsHeader from "../../../../../Components/Media/SingleNews/SingleNewsHeader/SingleNewsHeader";
import ButtonLight from "../../../../../Components/Shared/Button/Button";

const SingleNewsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, newsData] = useFetch("/news");
  const singleNews = newsData?.filter(({ id: newsId }) => newsId === id);

  return (
    <>
      {singleNews.length > 0 && <SingleNewsHeader singleNewsData={singleNews[0]} />}
      {singleNews.length > 0 && <SingleNewsBody singleNewsData={singleNews[0]} />}
      <ButtonLight text="Back" />
    </>
  );
};

export default SingleNewsPage;

import React from "react";
// components
import SingleNewsBody from "../../../../Components/Media/SingleNews/SingleNewsBody/SingleNewsBody";
// hooks
import { useRouter } from "next/router";
import useFetch from "../../../../Components/Hooks/useFetch";

import SingleNewsHeader from "../../../../Components/Media/SingleNews/SingleNewsHeader/SingleNewsHeader";
import ButtonLight from "../../../../Components/Shared/Button/Button";
import Link from "next/link";
import PreLoader from "../../../../Components/Shared/PreLoader/PreLoader";

const SingleNewsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, singleNews] = useFetch(`/news/${id}`);

  return (
    <>
      {singleNews ? <SingleNewsHeader singleNewsData={singleNews} /> : <PreLoader />}
      {singleNews ? <SingleNewsBody singleNewsData={singleNews} /> : <PreLoader />}
      <div className="container-layout pb10">
        <Link href="/media/news" passHref>
          <a>
            <ButtonLight text="Back" />
          </a>
        </Link>
      </div>
    </>
  );
};

export default SingleNewsPage;

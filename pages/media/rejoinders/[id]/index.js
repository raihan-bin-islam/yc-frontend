import React from "react";

const SingleRejoinders = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, newsData] = useFetch("/rejoinders");
  const singleNews = newsData?.filter(({ id: newsId }) => newsId === id);
  return <div>SingleRejoinders</div>;
};

export default SingleRejoinders;

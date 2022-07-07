import React from "react";
import { useRouter } from "next/router";

import useFetch from "../../../Components/Hooks/useFetch";
import HeroBannerSmall from "../../../Components/Shared/HeroBannerSmall/HeroBannerSmall";
import PreLoader from "../../../Components/Shared/PreLoader/PreLoader";
import SearchResults from "../../../Components/SearchResults/SearchResults";

const Search = () => {
  const router = useRouter();
  const { keyword } = router.query;
  // const [isLoading, events] = useFetch("/events");
  const [isLoading, searchResults] = useFetch(`/global-search?topic=${keyword}`);

  // filter and return the array based on search keyword
  // const filterSearchData = (keyword) => {
  //   if (keyword && keyword.length > 3) {
  //     return events.filter(({ title }) => title.toLowerCase().includes(keyword.toLowerCase()));
  //   }
  //   return [];
  // };
  // // variable to hold the filtered data
  // const searchResult = filterSearchData(keyword);

  return (
    <>
      <HeroBannerSmall title="search results" />
      {isLoading ? <PreLoader size={20} /> : <SearchResults searchResults={searchResults} />}
    </>
  );
};

export default Search;

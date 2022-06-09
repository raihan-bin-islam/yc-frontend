import React from "react";
import { useRouter } from "next/router";

import useFetch from "../../Components/Hooks/useFetch";

const Search = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const [isLoading, events] = useFetch("/events");
  const filterSearchData = (keyword) => {
    if (keyword && keyword.length > 3) {
      return events.filter(({ title }) => title.toLowerCase().includes(keyword.toLowerCase()));
    }
    return [];
  };
  const searchResult = filterSearchData(keyword);

  return (
    <div className="container-layout pt10">
      {searchResult.length > 0 &&
        searchResult.map((data, index) => {
          return (
            <React.Fragment key={data.id}>
              <h2>{data.title}</h2>
              <br />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Search;

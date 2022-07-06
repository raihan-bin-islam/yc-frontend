import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import HeroBannerSmall from "../Shared/HeroBannerSmall/HeroBannerSmall";
import SearchResultsComponent from "../Shared/SearchResultsComponent/SearchResultsComponent";
import { container, pageTitle, heading, noData } from "./searchResults.module.scss";
const SearchResults = ({ searchResults }) => {
  const { articles, news, events } = searchResults;

  return (
    <section className={container}>
      {/* Articles */}
      <h4 className={heading}>articles</h4>
      {articles?.map(({ id, title, thumb_image }) => (
        <SearchResultsComponent key={id} id={id} title={title} image={thumb_image} type="articles" />
      ))}
      {articles?.length === 0 && <h2 className={noData}>No Data Found</h2>}
      {/* News */}
      <h4 className={heading}>news</h4>
      {news?.map(({ id, title, thumb_image }) => (
        <SearchResultsComponent key={id} id={id} title={title} image={thumb_image} type="news" />
      ))}
      {news?.length === 0 && <h2 className={noData}>No Data Found</h2>}
      {/* Events */}
      <h4 className={heading}>events</h4>
      {events?.map(({ id, title, thumb_image }) => (
        <SearchResultsComponent key={id} id={id} title={title} image={thumb_image} type="events" />
      ))}
      {events?.length === 0 && <h2 className={noData}>No Data Found</h2>}
    </section>
  );
};

export default SearchResults;

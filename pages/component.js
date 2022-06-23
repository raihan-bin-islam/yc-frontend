import React, { useEffect, useState } from "react";
import FormErrorMessage from "../Components/Forms/FormErrorMessage/FormErrorMessage";
import Book from "../Components/MediaKit/MediaKitSVG/Book/Book";
import BrandGuideline from "../Components/MediaKit/MediaKitSVG/BrandGuideline/BrandGuideline";
import Photograph from "../Components/MediaKit/MediaKitSVG/Photograph/Photograph";
import YCLogo from "../Components/MediaKit/MediaKitSVG/YCLogo/YCLogo";
import BreadCrumb from "../Components/Shared/BreadCrumb/BreadCrumb";
import HeroBannerSmall from "../Components/Shared/HeroBannerSmall/HeroBannerSmall";

const Component = () => {
  // Fetch the data from the api based on the endpoint
  const fetchData = async () => {
    await fetch(
      `https://graph.facebook.com/v14.0/105208782240411_105280192233270/likes?access_token=EAANKrREsWqcBAKnMUtGVVtm1ZCz1tCFJTOARQ0avC9QMblGGaPvYtZAsaFOP4LXUJlHsfNYxDklHyM353tZAa0muCypgiOZAefvUNoQ1WPFY8Ag4mByZBMXb5G1QVOx2ZAnSkp8QINn3mfbZCU1XZClHyD0sgtZASwA9nMSmFKZA0VmrzH3xGrWzBIpn9gltbP7v4kO1LbfhDCe4ua1zcMTHbz&pretty=0&summary=true&limit=1&after=QVFIUkR6NFVBUF9HMW5ibTBQd1YzWWk4bDBvTGJVM2NmS2FVd2xPODVOYURyYmt6c0ctekFteE5YOHd0T3BWc0ZA4UDNJbU9RWlVvVWcxVXhBa3RxWG56WGJn`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setData(data);
        // reversed ? setData(data.reverse()) : setData(data);
      })
      .catch((err) => {
        // setIsPending(false);
        console.log(err);
      });
  };
  //
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/* <PreLoader /> */}

      <div className="">
        {/* <HeroBannerSmall />
        <BreadCrumb blue /> */}

        {/* <MediaLibraryPage /> */}
        <div className="container-layout pt10 pb10">
          {/* <FormErrorMessage msg="This Field Is Required" /> */}
          <Book />
          <Photograph />
          <BrandGuideline />
          <YCLogo />
        </div>
      </div>
    </>
  );
};

export default Component;

import React from "react";
import HomeVideoSlide from "../../Home/HomeVideoSlide/HomeVideoSlide";
import useFetch from "../../Hooks/useFetch";
import styles from "./profvideoslider.module.scss";

const ProfVideoSlider = () => {
  const [isLoading, videoData] = useFetch("/yunus-speech");
  const { profVideoContainer, profVideoHeader } = styles;
  return (
    <section className={profVideoContainer} id="speeches">
      <div className={profVideoHeader}>
        <h2>Speeches</h2>
      </div>
      {videoData.length > 0 && <HomeVideoSlide isLoading={isLoading} videoData={videoData} />}
    </section>
  );
};

export default ProfVideoSlider;

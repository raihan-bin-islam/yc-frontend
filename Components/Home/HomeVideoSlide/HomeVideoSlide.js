import React, { useState, useEffect } from "react";

// Slick slider
import Slider from "react-slick/lib/slider";

// Styles
import styles from "./homevideoslide.module.scss";
import leafImg from "../../../public/assets/images/landing_page/yunus_leaf.png";

// Components
import SliderCard from "../../Shared/SliderCard/SliderCard";
import Arrow from "../../Shared/Arrows/Arrow";

// Custom Hooks
import useYoutubeApi from "../../Hooks/useYoutubeApi";
import useFetch from "../../Hooks/useFetch";

const HomeVideoSlide = () => {
  // video slider data
  const videoData = useFetch("/yunus-speech");

  // States
  const [uniquId, setUniqueId] = useState("");

  // set Initial video link to the first video after video data is fetched
  useEffect(() => {
    videoData.length > 0 && setVideoUrl(videoData[0].youtube_link);
  }, [videoData]);

  // set the video url according to the click on the thumbnail
  const setVideoUrl = (url) => {
    const id = url.substring(url.lastIndexOf("=") + 1, url.length);
    setUniqueId(id);
  };

  // styles
  const {
    videoSlideContainer,
    videoSliderBody,
    videoHeroContainer,
    videoThumbContainer,
    videoThumb,
    playBtn,
    videoLeaf,
  } = styles;

  // slider settings
  const youTubeSlider = {
    dots: false,
    infinite: videoData && videoData.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    appendArrows: videoSliderBody,
    cssEase: "ease-in-out",
    prevArrow: <Arrow type="prev" />,
    nextArrow: <Arrow />,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };

<<<<<<< HEAD
  // const videoData = useYoutubeApi("9CAz_vvsK9M");
  // console.log(videoData);

=======
  const videoData = useYoutubeApi("9CAz_vvsK9M");
  
>>>>>>> farhan
  return (
    <section className={videoSlideContainer}>
      <div className={videoLeaf}>
        <img src={leafImg.src} alt="yunus-leaf" />
      </div>

      <div className={videoSliderBody}>
        <div className={videoHeroContainer}>
          {uniquId !== "" && <iframe src={`https://www.youtube.com/embed/${uniquId}`}></iframe>}
        </div>
        <div className="mt3">
          <Slider {...youTubeSlider}>
            {videoData &&
              videoData.map(({ id, thumb_image, title, youtube_link }) => {
                return (
                  <SliderCard
                    key={id}
                    image={thumb_image}
                    title={title}
                    type="video"
                    onClick={() => setVideoUrl(youtube_link)}
                  />
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoSlide;

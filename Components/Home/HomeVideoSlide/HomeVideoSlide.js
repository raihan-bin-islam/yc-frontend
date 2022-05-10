import React, { useState } from "react";
import Slider from "react-slick/lib/slider";
import styles from "./homevideoslide.module.scss";
import leafImg from "../../../public/assets/images/landing_page/yunus_leaf.png";
import SliderCard from "../../Shared/SliderCard/SliderCard";
import PlayButton from "../../Shared/CommonSvg/PlayButton";
// import NextArrow from "./Arrows/NextArrow";
// import PrevArrow from "./Arrows/PrevArrow";
import Arrow from "../../Shared/Arrows/Arrow";
import useYoutubeApi from "../../Hooks/useYoutubeApi";
// import NextArrow from "../../Shared/Arrows/NextArrow";

const HomeVideoSlide = () => {
  // styles
  const {
    videoSlideContainer,
    videoSliderBody,
    videoHeroContainer,
    videoThumbContainer,
    videoThumb,
    videoThumbnail,
    videoLeaf,
  } = styles;

  // states
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  // slider
  const youTubeSlider = {
    dots: false,
    infinite: true,
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

  const videoData = useYoutubeApi("9CAz_vvsK9M");
  
  return (
    <section className={videoSlideContainer}>
      <div className={videoLeaf}>
        <img src={leafImg.src} alt="yunus-leaf" />
      </div>
      <div className={videoSliderBody}>
        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
          <div className={videoHeroContainer}>
            <PlayButton className={videoThumbnail} />
            <img src="/assets/images/landing_page/video-thumbnaile.png" alt="" />
          </div>
          <div className={videoHeroContainer}>
            <PlayButton className={videoThumbnail} />
            <img src="/assets/images/landing_page/video-thumbnaile.png" alt="" />
          </div>
          <div className={videoHeroContainer}>
            <PlayButton className={videoThumbnail} />
            <img src="/assets/images/landing_page/video-thumbnaile.png" alt="" />
          </div>
          <div className={videoHeroContainer}>
            <PlayButton className={videoThumbnail} />
            <img src="/assets/images/landing_page/video-thumbnaile.png" alt="" />
          </div>
          <div className={videoHeroContainer}>
            <PlayButton className={videoThumbnail} />
            <img src="/assets/images/landing_page/video-thumbnaile.png" alt="" />
          </div>
          <div className={videoHeroContainer}>
            <PlayButton className={videoThumbnail} />
            <img src="/assets/images/landing_page/video-thumbnaile.png" alt="" />
          </div>
          <div className={videoHeroContainer}>
            <PlayButton className={videoThumbnail} />
            <img src="/assets/images/landing_page/video-thumbnaile.png" alt="" />
          </div>
        </Slider>
        <div className="mt3">
          <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} {...youTubeSlider}>
            <SliderCard image="/assets/images/landing_page/ProfYunus2.png" title="video 1" type="video" />
            <SliderCard image="/assets/images/landing_page/ProfYunus2.png" title="video 1" type="video" />
            <SliderCard image="/assets/images/landing_page/ProfYunus2.png" title="video 1" type="video" />
            <SliderCard image="/assets/images/landing_page/ProfYunus2.png" title="video 1" type="video" />
            <SliderCard image="/assets/images/landing_page/ProfYunus2.png" title="video 1" type="video" />
            <SliderCard image="/assets/images/landing_page/ProfYunus2.png" title="video 1" type="video" />
            <SliderCard image="/assets/images/landing_page/ProfYunus2.png" title="video 1" type="video" />

            {/* <div className={videoThumbContainer}>
                            <div className={videoThumb}>
                                <h3>1</h3>
                            </div>
                        </div>
                        <div className={videoThumbContainer}>
                            <div className={videoThumb}>
                                <h3>2</h3>
                            </div>
                        </div>
                        <div className={videoThumbContainer}>
                            <div className={videoThumb}>
                                <h3>3</h3>
                            </div>
                        </div>
                        <div className={videoThumbContainer}>
                            <div className={videoThumb}>
                                <h3>4</h3>
                            </div>
                        </div>
                        <div className={videoThumbContainer}>
                            <div className={videoThumb}>
                                <h3>5</h3>
                            </div>
                        </div>
                        <div className={videoThumbContainer}>
                            <div className={videoThumb}>
                                <h3>6</h3>
                            </div>
                        </div> */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoSlide;

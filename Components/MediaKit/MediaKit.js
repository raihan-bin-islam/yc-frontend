import React from "react";
import HeroBanner from "../Shared/HeroBanner/HeroBanner";
import styles from "./mediakit.module.scss";
import mediaKitData from "./mediakit.json";
import mediaKitPath from "../../public/assets/images/media-kit/media-kit-path.png";
import HeroBannerSmall from "../Shared/HeroBannerSmall/HeroBannerSmall";
import Book from "./MediaKitSVG/Book/Book";
import BrandGuideline from "./MediaKitSVG/BrandGuideline/BrandGuideline";
import Photograph from "./MediaKitSVG/Photograph/Photograph";
import YCLogo from "./MediaKitSVG/YCLogo/YCLogo";

const MediaKit = () => {
  //styles
  const {
    mediaKitContainer,
    mediaKitContainerHeader,
    mediaKitContainerBody,
    mediaKitContainerBodyGrid,
    mediaKitCard,
    mediaKitImage,
    mediaKitContainerFooter,
  } = styles;
  const images = [
    <Book key={1} id="bookSvg1" />,
    <Photograph key={2} />,
    <Book key={3} id="bookSvg2" />,
    <YCLogo key={4} />,
    <BrandGuideline key={5} />,
  ];
  //
  return (
    <section className={mediaKitContainer}>
      <HeroBannerSmall title="Media Kit" />
      <div className={`${mediaKitContainerBody} container-layout`}>
        <div className={mediaKitContainerBodyGrid}>
          {mediaKitData.map((mediaKit, index) => (
            <div key={`media_${index}`} className={mediaKitCard}>
              <div className={mediaKitImage}>
                {images[index]}
                {/* <img src={mediaKit.photo} alt="" /> */}
              </div>
              <div className="ml2 flex-col">
                <h3>{mediaKit.title}</h3>
                <p>{mediaKit.sub_title}</p>
                <a href="#">download</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={mediaKitContainerFooter}>
        <img src={mediaKitPath.src} alt="media-kit-path" />
      </div>
    </section>
  );
};

export default MediaKit;

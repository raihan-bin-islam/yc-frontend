import React from "react";

// COMPONENTS
import HeroBanner from "../../Shared/HeroBanner/HeroBanner";

// CSS
import styles from "./MediaPhotoGalleryHeader.module.scss";

const MediaPhotoGalleryHeader = () => {
  const { heroHeader } = styles;

  return (
    <div className={heroHeader}>
      <HeroBanner />
    </div>
  );
};

export default MediaPhotoGalleryHeader;

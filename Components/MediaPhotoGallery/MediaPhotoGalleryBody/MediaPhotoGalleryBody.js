import React from "react";

// COMPONENTS
import PhotoCard from "../PhotoCard/PhotoCard";

// DATA
import galleryData from "./data";

// CSS
import styles from "./MediaPhotoGalleryBody.module.scss";

const MediaPhotoGalleryBody = () => {
  const { photoGalleryBody, box } = styles;

  return (
    <div className={`${photoGalleryBody} container-layout`}>
      {galleryData.map(({ image, title }) => (
        <div className={box}>
          <PhotoCard image={image} title={title} />
        </div>
      ))}
    </div>
  );
};

export default MediaPhotoGalleryBody;

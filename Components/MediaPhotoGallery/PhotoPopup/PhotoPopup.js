import React, { useState } from "react";

// COMPONENTS
import PhotoCard from "../PhotoCard/PhotoCard";

// DATA
import galleryData from "../MediaPhotoGalleryBody/data";

// CSS
import styles from "./PhotoPopup.module.scss";

const PhotoPopup = ({ show, onHide, image, title }) => {
  const { popup, popupClose, btnClose, box } = styles;

  const hidePopup = () => {};

  return (
    <div className={show ? `${popup}` : `${popupClose}`}>
      <div className={box}>
        <PhotoCard image={image} title={title} />
        <button className={btnClose} onClick={onHide}>
          X
        </button>
      </div>
    </div>
  );
};

export default PhotoPopup;

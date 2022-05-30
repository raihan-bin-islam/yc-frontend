import React, { useState } from "react";

// COMPONENTS
import PhotoCard from "../PhotoCard/PhotoCard";

// DATA
import galleryData from "../MediaPhotoGalleryBody/data";

// CSS
import styles from "./PhotoPopup.module.scss";

const PhotoPopup = () => {
  const { popup, popupClose, btnClose, box } = styles;
  const [popupPhoto, setPopupPhoto] = useState(true);

  const closePopup = () => {
    setPopupPhoto(!popupPhoto);
  };

  return (
    <div className={popupPhoto ? `${popup}` : `${popupClose}`}>
      <div className={box}>
        <PhotoCard image={galleryData[1].image} title={galleryData[1].title} />
        <button className={btnClose} onClick={closePopup}>
          X
        </button>
      </div>
    </div>
  );
};

export default PhotoPopup;

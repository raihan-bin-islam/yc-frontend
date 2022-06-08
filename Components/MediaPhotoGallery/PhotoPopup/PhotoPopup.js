import React, { useRef } from "react";

// COMPONENTS
import PhotoCard from "../PhotoCard/PhotoCard";

// DATA
import galleryData from "../MediaPhotoGalleryBody/data";

// CSS
import styles from "./PhotoPopup.module.scss";

const PhotoPopup = ({ show, onHide, image, title }) => {
  const { popup, popupClose, btnClose, box } = styles;
  const imageRef = useRef();

  const hidePopup = () => {
    show = false;
    imageRef.current.classList.remove(popup);
    imageRef.current.classList.add(popupClose);
  };

  return (
    <div className={show ? `${popup}` : `${popupClose}`} ref={imageRef}>
      <div className={box}>
        <PhotoCard image={image} title={title} />
        <button
          className={btnClose}
          onClick={() => {
            hidePopup();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default PhotoPopup;

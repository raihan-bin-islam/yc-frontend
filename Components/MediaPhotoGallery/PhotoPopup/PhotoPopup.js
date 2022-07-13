import React, { useEffect, useRef, useState } from "react";

// COMPONENTS
import PhotoCard from "../PhotoCard/PhotoCard";

// DATA
import galleryData from "../MediaPhotoGalleryBody/data";

// CSS
import styles from "./PhotoPopup.module.scss";

const PhotoPopup = ({ show, onHide, image, title }) => {
  const { popup, popupClose, btnClose, box } = styles;
  const imageRef = useRef();
  const [hide, setHide] = useState(!show);

  useEffect(() => {
    if (show) {
      setHide(false);
    }
  }, [show]);

  const hidePopup = () => {
    setHide(!hide);
    show = false;
    // imageRef.current.classList.remove(popup);
    // imageRef.current.classList.add(popupClose);
  };

  return (
    <div className={`${show && popup} ${hide === true && popupClose}`} ref={imageRef}>
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

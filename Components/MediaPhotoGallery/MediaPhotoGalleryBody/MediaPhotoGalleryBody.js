import React, { useState } from "react";

// COMPONENTS
import PhotoCard from "../PhotoCard/PhotoCard";
import ButtonLight from "../../Shared/Button/Button";
import PhotoPopup from "../PhotoPopup/PhotoPopup";

// DATA
import galleryData from "./data";

// CSS
import styles from "./MediaPhotoGalleryBody.module.scss";

const photoCardPerPage = 9;

const MediaPhotoGalleryBody = () => {
  const { photoGalleryBody, box, btnContainer, container, popup, btnClose, popupClose } = styles;

  const [popupPhoto, setPopupPhoto] = useState(0);

  const [endOffset, setEndOffset] = useState(9);

  const getPopup = (value) => {
    setPopupPhoto(value);
  };

  return (
    <div className={container}>
      {/* Popup start */}
      {/* Popup end */}

      {/* Photo Gallery start */}
      <div className={`${photoGalleryBody} container-layout`}>
        {galleryData.slice(0, endOffset).map(({ image, title, id }) => (
          <div className={box} key={id} onClick={() => getPopup(id)}>
            <PhotoCard image={image} title={title} id={id} />
            <PhotoPopup image={image} title={title} show={popupPhoto === id} />
          </div>
        ))}
      </div>
      {/* Photo Gallery end */}
      <div className={btnContainer}>
        <ButtonLight
          text="Load More"
          onClick={() => {
            setTimeout(() => {
              setEndOffset((prev) => prev + photoCardPerPage);
            }, 500);
          }}
        />
      </div>
    </div>
  );
};

export default MediaPhotoGalleryBody;

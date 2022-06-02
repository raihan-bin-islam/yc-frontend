import React, { useState, useEffect } from "react";

// COMPONENTS
import PhotoCard from "../PhotoCard/PhotoCard";
import ButtonLight from "../../Shared/Button/Button";
import PhotoPopup from "../PhotoPopup/PhotoPopup";

// DATA
import galleryData from "./data";

// CSS
import styles from "./MediaPhotoGalleryBody.module.scss";

const photoCardPerPage = 9;
let arrayForHoldingPhotoCards = [];

const MediaPhotoGalleryBody = () => {
  const { photoGalleryBody, box, btnContainer, container, popup, btnClose, popupClose } = styles;

  const [popupPhoto, setPopupPhoto] = useState(0);
  const [photoCardToShow, setPhotoCardToShow] = useState([]);
  const [next, setNext] = useState(9);

  const loopWithSlice = (start, end) => {
    const slicedPhotoCard = galleryData.slice(start, end);
    // console.log(slicedPhotoCard);
    arrayForHoldingPhotoCards = [...arrayForHoldingPhotoCards, ...slicedPhotoCard];
    setPhotoCardToShow(arrayForHoldingPhotoCards);
  };

  useEffect(() => {
    loopWithSlice(0, photoCardPerPage);
  }, []);

  const handleShowMorePhotoCard = () => {
    loopWithSlice(next, next + photoCardPerPage);
    setNext(next + photoCardPerPage);
  };
  const getPopup = (value) => {
    setPopupPhoto(value);
  };
  const hidePopup = () => {
    setPopupPhoto(0);
  };

  // console.log(photoCardToShow);

  return (
    <div className={container}>
      {/* Popup start */}
      {/* Popup end */}

      {/* Photo Gallery start */}
      <div className={`${photoGalleryBody} container-layout`}>
        {photoCardToShow.map(({ image, title, id }) => (
<<<<<<< HEAD
          <div key={id} className={box}>
=======
          <div className={box} key={id} onClick={() => getPopup(id)}>
>>>>>>> nabiul
            <PhotoCard image={image} title={title} id={id} />
            <PhotoPopup
              image={image}
              title={title}
              show={popupPhoto === id}
              onHide={() => hidePopup()}
            />
          </div>
        ))}
      </div>
      {/* Photo Gallery end */}

      <div className={btnContainer}>
        <ButtonLight text="Load More" onClick={handleShowMorePhotoCard} />
      </div>
    </div>
  );
};

export default MediaPhotoGalleryBody;

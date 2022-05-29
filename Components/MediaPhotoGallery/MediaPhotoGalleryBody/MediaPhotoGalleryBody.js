import React, { useState, useEffect } from "react";

// COMPONENTS
import PhotoCard from "../PhotoCard/PhotoCard";

// DATA
import galleryData from "./data";

// CSS
import styles from "./MediaPhotoGalleryBody.module.scss";

const photoCardPerPage = 5;
let arrayForHoldingPhotoCards = [];

const MediaPhotoGalleryBody = () => {
  const { photoGalleryBody, box } = styles;

  const [photoCardToShow, setPhotoCardToShow] = useState([]);
  const [next, setNext] = useState(5);

  const loopWithSlice = (start, end) => {
    const slicedPhotoCard = galleryData.slice(start, end);
    arrayForHoldingPhotoCards = [
      ...arrayForHoldingPhotoCards,
      ...slicedPhotoCard,
    ];
    setPhotoCardToShow(arrayForHoldingPhotoCards);
  };

  useEffect(() => {
    loopWithSlice(0, photoCardPerPage);
  }, []);

  const handleShowMorePhotoCard = () => {
    loopWithSlice(next, next + photoCardPerPage);
    setNext(next + photoCardPerPage);
  };

  return (
    <div className={`${photoGalleryBody} container-layout`}>
      {photoCardToShow.map(({ image, title }) => (
        <div className={box}>
          <PhotoCard image={image} title={title} />
        </div>
      ))}
      <button onClick={handleShowMorePhotoCard}>load more</button>
    </div>
  );
};

export default MediaPhotoGalleryBody;

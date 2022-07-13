import React, { useEffect, useState } from "react";

// COMPONENTS
import PhotoCard from "../PhotoCard/PhotoCard";
import ButtonLight from "../../Shared/Button/Button";
import PhotoPopup from "../PhotoPopup/PhotoPopup";

// DATA
// import galleryData from "./data";

// CSS
import styles from "./MediaPhotoGalleryBody.module.scss";

const photoCardPerPage = 9;

const MediaPhotoGalleryBody = ({ galleryData }) => {
  const { photoGalleryBody, box, btnContainer, container, popup, btnClose, popupClose } = styles;

  const [popupPhoto, setPopupPhoto] = useState(0);

  // used to determine if the same image has been clicked twice
  const [selectedImageId, setSelectedImageId] = useState(0);
  const [reRender, setReRender] = useState(false);

  const [endOffset, setEndOffset] = useState(9);

  const getPopup = (value) => {
    if (selectedImageId === value) {
      // If the same image has been clicked again
      // Trigger re-render
      setReRender(!reRender);
      // Set the popup photo id to its initial value
      setPopupPhoto(0);
      return;
    }
    // Else set the selected image id to the value
    setSelectedImageId(value);
  };

  // Triggers on re-render
  useEffect(() => {
    // set the popup photo id to the currently selected image
    setPopupPhoto(selectedImageId);
  }, [reRender, selectedImageId]);

  return (
    <div className={container}>
      {/* Popup start */}
      {/* Popup end */}

      {/* Photo Gallery start */}
      <div className={`${photoGalleryBody} container-layout`}>
        {galleryData.slice(0, endOffset).map(({ thumb_image, banner_image, image_caption, id }) => (
          <React.Fragment key={id}>
            <div className={box} onClick={() => getPopup(id)}>
              <PhotoCard image={thumb_image} title={image_caption} id={id} />
            </div>
            <PhotoPopup image={banner_image} title={image_caption} show={popupPhoto === id} />
          </React.Fragment>
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

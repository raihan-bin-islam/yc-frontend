import React from "react";

// COMPONENTS
import MediaPhotoGalleryHeader from "../../../Components/MediaPhotoGallery/MediaPhotoGalleryHeader/MediaPhotoGalleryHeader";
import MediaPhotoGalleryBody from "../../../Components/MediaPhotoGallery/MediaPhotoGalleryBody/MediaPhotoGalleryBody";
import useFetch from "../../../Components/Hooks/useFetch";

const MediaPhotoGallery = () => {
  const [isLoading, photoGallery] = useFetch("/photo-gallery");
  return (
    <div>
      <MediaPhotoGalleryHeader />
      <MediaPhotoGalleryBody />
    </div>
  );
};

export default MediaPhotoGallery;

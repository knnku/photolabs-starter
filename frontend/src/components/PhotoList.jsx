import React from "react";

import "../styles/PhotoList.scss";
import photos from "../mocks/photos.js";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ toggleModal, favedPhotos, favePhoto }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return (
          <PhotoListItem
            key={photo.id}
            photoId={photo.id}
            city={photo.location.city}
            country={photo.location.country}
            imageSource={photo.urls.regular}
            userName={photo.user.username}
            profile={photo.user.profile}
            toggleModal={toggleModal}
            favedPhotos={favedPhotos}
            favePhoto={favePhoto}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;

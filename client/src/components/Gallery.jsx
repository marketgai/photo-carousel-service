import React from 'react';

const Gallery = ({carouselPhotos}) => {
  return (
    <div>
      {carouselPhotos.map(photo => {
        return <img src={photo.photo}></img>;
      })}
    </div>
  );
};

export default Gallery;
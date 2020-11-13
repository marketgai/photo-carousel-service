import React from 'react';
import Image from './Image.jsx';

const Gallery = ({carouselPhotos}) => {
  return (
    <div>
      {carouselPhotos.map(image => {
        return <Image key={image.id} image={image} />;
      })}
    </div>
  );
};

export default Gallery;
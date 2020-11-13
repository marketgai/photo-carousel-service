import React from 'react';

const Image = ({image}) => {
  return (
    <div>
      <img className='photo-carousel-gallery-image' src={image.photo}></img>
    </div>
  );
};

export default Image;
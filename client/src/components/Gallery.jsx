import React from 'react';
import styled from 'styled-components';
import Image from './Image.jsx';

const GalleryStyled = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 25% 25% 25% 25%;
  background-color: gray;
  margin: auto;
  width: 80%;
  max-width: 1200px;
  min-width: 320px;
  height: 100%;
  min-height: 200px;
  max-height: 500px;
  grid-gap: 5px;
`;

const Gallery = ({carouselPhotos}) => {
  //Implement a counter to only let a max of 8 pictures show up in the gallery.
  let photoCount = 0;
  return (
    <GalleryStyled>
      {carouselPhotos.map((image, index) => {
        if (photoCount < 8) {
          photoCount++;
          return <Image key={image.id} image={image} index={index} />;
        }
       })}
    </GalleryStyled>
  );
};

export default Gallery;
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const GalleryStyled = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 25% 25% 25% 25%;
  margin: auto;
  width: 80%;
  min-width: 500px;
  height: 100%;
  min-height: 500px;
  grid-gap: 5px;
`;

const Photo = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;

const MainPhoto = styled(Photo)`
  grid-area: span 2 / span 2
`;

const Gallery = ({ carouselPhotos, toggleCarousel }) => {
  // Implement a counter to only let first 5 pictures for gallery.
  let photoCount = 0;
  return (
    <GalleryStyled>
      {/* Main Photo has a larger Grid Area */}
      {carouselPhotos[0]
        && <MainPhoto src={carouselPhotos[0].photo} onClick={toggleCarousel} id={0} />}
      {/* Include 4 more photos */}
      {carouselPhotos.map((image, index) => {
        if (photoCount < 4 && index > 0) {
          photoCount += 1;
          return <Photo src={image.photo} key={image.id} id={index} onClick={toggleCarousel} />;
        }
        return null;
      })}
    </GalleryStyled>
  );
};

export default Gallery;

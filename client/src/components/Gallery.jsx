/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Gallery = ({ carouselPhotos, toggleCarousel }) => {
  // Implement a counter to only let first 5 pictures for gallery.
  let photoCount = 0;
  return (
    <div>
      <GalleryStyled>
        {carouselPhotos[0]
          && <MainPhoto src={carouselPhotos[0].photo} onClick={toggleCarousel} id={0} />}
        {carouselPhotos.map((image, index) => {
          if (photoCount < 4 && index > 0) {
            photoCount += 1;
            return <Photo src={image.photo} key={image.id} id={index} onClick={toggleCarousel} />;
          }
          return null;
        })}
      </GalleryStyled>
    </div>
  );
};

const GalleryStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: auto;
  width: 80%;
  min-width: 500px;
  height: 100%;
  min-height: 500px;
  grid-gap: 8px;
  margin-top: 24px;
  user-select: none;
`;

const Photo = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  user-select: none;

  &:hover {
    opacity: 80%;
  }
`;

const MainPhoto = styled(Photo)`
  grid-area: span 2 / span 2
`;

export default Gallery;

/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Gallery = ({ carouselPhotos, toggleCarousel }) => (
  <div>
    <GalleryStyled>
      {carouselPhotos.map((image, index) => {
        if (index < 5) {
          return <Photo src={image.photo} key={image.id} id={index} onClick={toggleCarousel} />;
        }
        return null;
      })}
    </GalleryStyled>
  </div>
);

const GalleryStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: auto;
  width: 70%;
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
  border-top-right-radius: ${(props) => (props.id === 2 ? '12px' : null)};
  border-bottom-right-radius: ${(props) => (props.id === 4 ? '12px' : null)};
  border-top-left-radius: ${(props) => (props.id === 0 ? '12px' : null)};
  border-bottom-left-radius: ${(props) => (props.id === 0 ? '12px' : null)};
  grid-area: ${(props) => (props.id === 0 ? 'span 2 / span 2' : 'span 1 / span 1')};
  &:hover {
    filter: brightness(0.8);
    transition: 200ms ease-out;
  }
`;

export default Gallery;

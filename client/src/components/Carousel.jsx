import React from 'react';
import styled from 'styled-components';

const CarouselModal = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: white;
`;

const FocusImage = styled.img`
  max-height: 80%;
  max-width:80:
`;

const Carousel = ({carousel, toggleCarousel, moveIndexLeft, moveIndexRight}) => {
  return (
    <CarouselModal>
      <button onClick={toggleCarousel} >Press X to Close Modal</button>
      <h2>Image {parseInt(carousel.photoIndex) + 1} / {carousel.carouselPhotos.length}</h2>
      <button onClick={moveIndexLeft} >Scroll Picture Left</button>
      <FocusImage src={carousel.carouselPhotos[carousel.photoIndex].photo}></FocusImage>
      <button onClick={moveIndexRight} >Scroll Picture Right</button>
    </CarouselModal>
  )
}

export default Carousel;
import React from 'react';
import styled from 'styled-components';

const CarouselModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const LeftButton = styled.div`
  height: 50px;
  width: 50px;
  background-image: url("https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image4.png");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  border: 1px solid rgb(176, 176, 176);
  border-radius: 50%;

  &:hover {
    opacity: 75%;
  }
`;

const RightButton = styled(LeftButton)`
  background-image: url("https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image2.png");
`;

const Carousel = ({carousel, toggleCarousel, moveIndexLeft, moveIndexRight}) => {
  return (
    <div>
      <button onClick={toggleCarousel} >Press X to Close Modal</button>
      <h2>Image {parseInt(carousel.photoIndex) + 1} / {carousel.carouselPhotos.length}</h2>
      <CarouselModal>
        <LeftButton onClick={moveIndexLeft}></LeftButton>
        <FocusImage src={carousel.carouselPhotos[carousel.photoIndex].photo}></FocusImage>
        <RightButton onClick={moveIndexRight} ></RightButton>
      </CarouselModal>
      <p>{carousel.carouselPhotos[carousel.photoIndex].description}</p>
    </div>
  )
}

export default Carousel;
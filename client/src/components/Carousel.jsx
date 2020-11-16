import React from 'react';
import styled, {keyframes} from 'styled-components';

const grow = keyframes`
  0% {
    height: 0px
  }
  100% {
    height: 100%
  }
`

const CarouselModal = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: white;
  animation: 200ms ${grow} ease-out;
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
      <CarouselModal>
        <button onClick={toggleCarousel} >Press X to Close Modal</button>
        <h2>Image {parseInt(carousel.photoIndex) + 1} / {carousel.carouselPhotos.length}</h2>
        <LeftButton onClick={moveIndexLeft}></LeftButton>
        <FocusImage className="test" src={carousel.carouselPhotos[carousel.photoIndex].photo}></FocusImage>
        <RightButton onClick={moveIndexRight} ></RightButton>
        <p>{carousel.carouselPhotos[carousel.photoIndex].description}</p>
      </CarouselModal>
    </div>
  )
}

export default Carousel;
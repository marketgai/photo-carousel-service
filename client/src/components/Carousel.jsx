/* eslint-disable react/prop-types */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import S from './StyledComponents.js';

const Carousel = ({
  carousel, toggleCarousel, moveIndexLeft, moveIndexRight, switchCarouselMosaic,
}) => (
  <CarouselModal>
    <TopLeftButtons>
      <S.Close onClick={toggleCarousel}>
        <S.ButtonImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image7.png" />
        Close
      </S.Close>
      <S.SwitchToMosaic onClick={switchCarouselMosaic}>
        <S.ButtonImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image25.png" />
        Show all photos
      </S.SwitchToMosaic>
    </TopLeftButtons>
    <TopRightButtons>
      <S.Button onClick={() => console.log('share')}>
        <S.ButtonImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image5.png" />
        Share
      </S.Button>
      <S.Button onClick={() => console.log('save')}>
        <S.ButtonImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/Heart.png" />
        Save
      </S.Button>
    </TopRightButtons>
    <PageCounter>
      { Number(carousel.photoIndex) + 1}
      /
      {carousel.carouselPhotos.length}
    </PageCounter>
    {Number(carousel.photoIndex) === 0 ? null : <LeftButton onClick={moveIndexLeft}><img src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image4.png"/></LeftButton>}
    <FocusImage className="test" src={carousel.carouselPhotos[carousel.photoIndex].photo} />
    {carousel.photoIndex >= carousel.carouselPhotos.length - 1
      ? null
      : <RightButton onClick={moveIndexRight}><img src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image2.png"/></RightButton>}
    <PhotoDescription>{carousel.carouselPhotos[carousel.photoIndex].description}</PhotoDescription>
  </CarouselModal>
);

// CSS via styled-components below:
const slideUp = keyframes`
  0% {
    height: 0px
  }
  100% {
    height: 100%
  }
`;

const CarouselModal = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: white;
  animation: 200ms ${slideUp} ease-out;
`;

const FocusImage = styled.img`
  display: flex;
  margin: auto;
  margin-left: auto;
  margin-right: auto;
  max-height: 80%;
  max-width:80%;
`;

const PageCounter = styled.h2`
  display: absolute;
  position: flex;
  top: 5%;
  text-align: center;
  color: gray;
`;

const PhotoDescription = styled.figcaption`
  position: flex;
  text-align: center;
  color: gray;
`;

const TopLeftButtons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top 2%;
  left: 5%;
`;

const TopRightButtons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 2%;
  right: 5%;
`;

const DirectionButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  border: 1px solid rgb(176, 176, 176);
  border-radius: 50%;
  background: white;

  &:hover {
    background: rgb(230, 230, 230);
  }
`;

const LeftButton = styled(DirectionButton)`
  left: 5%;
`;

const RightButton = styled(DirectionButton)`
  right: 5%;
`;

export default Carousel;

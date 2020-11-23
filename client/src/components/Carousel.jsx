/* eslint-disable react/prop-types */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import S from './StyledComponents.js';

const Carousel = ({
  carousel, toggleCarousel, moveIndexLeft, moveIndexRight, switchCarouselMosaic,
}) => (
  <CarouselWrapper>
    <CarouselModal>
      <TopRow>
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
          <S.RoundButton onClick={() => console.log('share')}>
            <S.SmallButtonImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image5.png" />
          </S.RoundButton>
          <S.RoundButton onClick={() => console.log('save')}>
            <S.SmallButtonImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/Heart.png" />
          </S.RoundButton>
        </TopRightButtons>
      </TopRow>
      <PageCounter>
        { Number(carousel.photoIndex) + 1}
        {' / '}
        {carousel.carouselPhotos.length}
      </PageCounter>
      {Number(carousel.photoIndex) === 0 ? null : <LeftButton onClick={moveIndexLeft}><StyledSVG viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"/></g></StyledSVG></LeftButton>}
      <FocusImage className="test" src={carousel.carouselPhotos[carousel.photoIndex].photo} />
      {carousel.photoIndex >= carousel.carouselPhotos.length - 1
        ? null
        : <RightButton onClick={moveIndexRight}><StyledSVG viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932" /></g></StyledSVG></RightButton>}
      <PhotoDescription>{carousel.carouselPhotos[carousel.photoIndex].description}</PhotoDescription>
    </CarouselModal>
  </CarouselWrapper>
);

const StyledSVG = styled.svg`
  display: block;
  fill: none;
  height: 12px;
  width: 12px;
  stroke: currentcolor;
  stroke-width: 5.33333;
  overflow: visible;"
`;

// CSS via styled-components below:
const slideUp = keyframes`
  0% {
    height: 0px;
    opacity: 0;
  }
  100% {
    height: 100%
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1
  }
`;

const smallerOnClick = keyframes`
  100% {
    width: 40px;
  }
`;

const CarouselWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: white;
  animation: 200ms ${slideUp} ease-in;
`;

const CarouselModal = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  animation: 1000ms ${fadeIn} ease-in;
  user-select: none;
`;

const FocusImage = styled.img`
  display: flex;
  margin: auto;
  margin-left: auto;
  margin-right: auto;
  max-height: 80%;
  max-width:80%;
  user-select: none;
`;

const PageCounter = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  width: 60px;
  font-family: sans-serif;
  text-align: center;
  transform: translateY(-80px) translateX(-30px);
  color: #484848;
  font-size: 16px;
  font-weight: 400;
  user-select: none;
  height: 40px;
`;

const PhotoDescription = styled.figcaption`
  font-family: sans-serif;
  fonst-size: 16px;
  position: absolute;
  bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  color: rgb(34, 34, 34);
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 38px 38px;
  top: 0px;
  left: 0px;
  bottom: 0px;
  box-sizing: border-box;
  font-family: sans-serif;
`;

const TopLeftButtons = styled.div`
  position: block;
  display: flex;
  justify-content: space-between;
  user-select: none;
`;

const TopRightButtons = styled.div`
  position: block;
  display: flex;
  justify-content: space-between;
  user-select: none;
`;

const DirectionButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  height: 48px;
  width: 48px;
  cursor: pointer;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(176, 176, 176);
  border-radius: 50%;
  user-select: none;

  &:hover {
    background: rgb(230, 230, 230);
  }
  &:active {
    animation: 200ms ${smallerOnClick} ease-out;
  }
`;

const LeftButton = styled(DirectionButton)`
  left: 3%;
`;

const RightButton = styled(DirectionButton)`
  right: 3%;
`;

export default Carousel;

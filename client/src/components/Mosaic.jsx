/* eslint-disable react/prop-types */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const generateMosaicChunks = (photos, switchCarouselMosaic) => {
  const photoCopies = photos.slice();
  let mosaic = [];
  let index = 0;
  while (photoCopies.length > 0) {
    const chunk = [];
    if (photoCopies.length === 5) {
      chunk.push(<LargePhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
      index += 1;
      chunk.push(<SmallPhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
      index += 1;
      chunk.push(<SmallPhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
      index += 1;
      chunk.push(<SmallPhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
      index += 1;
      chunk.push(<SmallPhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
      index += 1;
    } else if (photoCopies.length === 4) {
      chunk.push(<SmallPhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
      index += 1;
      chunk.push(<SmallPhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
      index += 1;
      chunk.push(<SmallPhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
      index += 1;
      chunk.push(<SmallPhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
      index += 1;
    } else {
      chunk.push(<LargePhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
      index += 1;
      chunk.push(<SmallPhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
      index += 1;
      chunk.push(<SmallPhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
      index += 1;
    }
    mosaic = [...mosaic, ...chunk];
  }
  return mosaic;
};

const Mosaic = ({ photoCarousel, toggleMosaic, switchCarouselMosaic }) => (
  <MosaicPositioning>
    <MosaicWrapper>
      <CloseButton onClick={toggleMosaic}>
        <StyledSVG viewBox="0 0 32 32">
          <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932" />
        </StyledSVG>
      </CloseButton>
      <MosaicGrid>
        {generateMosaicChunks(photoCarousel, switchCarouselMosaic)}
      </MosaicGrid>
    </MosaicWrapper>
  </MosaicPositioning>
);

const slideUp = keyframes`
  0% {
    height: 0px;
  }
  50% {
    height: 100%
  }
  0% {
    z-index: 100;
  }
  100% {
    z-index: 100%;
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

const MosaicPositioning = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  animation: 200ms ${fadeIn} ease-out;
  animation: 400ms ${slideUp} ease-in;
`;

const MosaicWrapper = styled.div`
  position: absolute;
  overflow: auto;
  display: flex;
  bottom: 0px;
  left: 0px;
  right: 0px;
  justify-contents: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 5;
  animation: 400ms ${slideUp} ease-in;
`;

const CloseButton = styled.div`
  position: fixed;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  border: 1px solid rgb(176, 176, 176);
  border-radius: 50%;
  left: 5%;
  background: white;
  user-select: none;
  margin: 55px 0px;

  &:hover {
    background: rgba(34, 34, 34, 0.1)
  }
`;

const StyledSVG = styled.svg`
  display: block;
  fill: none;
  height: 12px;
  width: 12px;
  stroke: currentcolor;
  stroke-width: 5.33333;
  overflow: visible;"
`;

const MosaicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 120px);
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  max-width: 55%;
  margin: auto;
  padding: 55px 100px;
  z-index: 5;
  user-select: none;
  animation: 1000ms ${fadeIn} ease-in;
`;

const SmallPhoto = styled.img`
  object-fit: cover;
  height: 100%;
  min-height: 400px;
  min-width: 200px;
  width: 100%;
  cursor: pointer;
  user-select: none;
  &:hover {
    filter: brightness(0.8);
    transition: 200ms ease-out;
  }
`;

const LargePhoto = styled(SmallPhoto)`
  grid-area: span 2 / span 2
`;

export default Mosaic;

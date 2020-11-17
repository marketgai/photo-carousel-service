/* eslint-disable react/prop-types */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    height: 0px
  }
  100% {
    height: 100%
  }
`;

const SmallPhoto = styled.img`
  object-fit: cover;
  height: 100%;
  min-height: 400px;
  min-width: 200px;
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;

const LargePhoto = styled(SmallPhoto)`
  grid-area: span 2 / span 2
`;

const MosaicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 120px);
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  width 80%;
  margin: auto;
  z-index: 10;
  animation: 100ms ${slideUp} ease-out;
`;

const MosaicWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-contents: center;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 9;
`;

const CloseButton = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  border: 1px solid rgb(176, 176, 176);
  border-radius: 50%;
  background-image: url("https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image4.png");
  left: 5%;

  &:hover {
    opacity: 75%;
  }
`;

const generateMosaicChunk = (photos, switchCarouselMosaic) => {
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
      chunk.push(<LargePhoto src={photoCopies.shift().photo} key={index} id={index} onClick={switchCarouselMosaic} />);
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
  <MosaicWrapper>
    <CloseButton onClick={toggleMosaic} />
    <MosaicGrid>
      {generateMosaicChunk(photoCarousel, switchCarouselMosaic)}
    </MosaicGrid>
  </MosaicWrapper>
);

export default Mosaic;

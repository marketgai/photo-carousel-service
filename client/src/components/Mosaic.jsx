/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

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
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 120px);
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  width 80%;
  z-index: 10;
`;

const generateMosaicChunk = (photos) => {
  const chunk = [];
  if (photos.length === 5) {
    chunk.push(<LargePhoto src={photos.shift().photo} />);
    chunk.push(<SmallPhoto src={photos.shift().photo} />);
    chunk.push(<SmallPhoto src={photos.shift().photo} />);
    chunk.push(<SmallPhoto src={photos.shift().photo} />);
    chunk.push(<SmallPhoto src={photos.shift().photo} />);
  } else if (photos.length === 4) {
    chunk.push(<LargePhoto src={photos.shift().photo} />);
    chunk.push(<SmallPhoto src={photos.shift().photo} />);
    chunk.push(<SmallPhoto src={photos.shift().photo} />);
    chunk.push(<SmallPhoto src={photos.shift().photo} />);
  } else {
    chunk.push(<LargePhoto src={photos.shift().photo} />);
    chunk.push(<SmallPhoto src={photos.shift().photo} />);
    chunk.push(<SmallPhoto src={photos.shift().photo} />);
  }
  return chunk;
};

const Mosaic = ({ photoCarousel }) => {
  let mosaic = [];
  const photos = photoCarousel.slice();
  while (photos.length > 0) {
    const chunk = generateMosaicChunk(photos);
    mosaic = [...mosaic, ...chunk];
  }
  return (
    <MosaicGrid>
      {mosaic}
    </MosaicGrid>
  );
};

export default Mosaic;

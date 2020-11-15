import React from 'react';
import styled from 'styled-components'

// const MainPhoto = styled.img`
//   height: 100%;
//   width: 100%;
//   grid-area: 1 / 1 / 3 / 3;
// `;

const Photo = styled.img`
  height: 100%;
  width: 100%;
`;

const Image = ({image, index}) => {
  console.log(index);
  return (
    <div>
        <Photo src={image.photo}></Photo>
    </div>
  );
};

export default Image;
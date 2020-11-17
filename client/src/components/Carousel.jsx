import React from 'react';
import styled, {keyframes} from 'styled-components';

const Carousel = ({carousel, toggleCarousel, moveIndexLeft, moveIndexRight}) => {
  return (
    <CarouselModal>
      <TopLeftButtons>
        <CloseModuleButton onClick={toggleCarousel}></CloseModuleButton>
        <ShowAllPhotosButton onClick={()=>console.log(test)} ></ShowAllPhotosButton>
      </TopLeftButtons>
      <TopRightButtons>
        <button onClick={()=>console.log(test)} >Share</button>
        <button onClick={()=>console.log(test)} >Favorite</button>
      </TopRightButtons>
      <PageCounter>{parseInt(carousel.photoIndex) + 1} / {carousel.carouselPhotos.length}</PageCounter>
      <LeftButton onClick={moveIndexLeft}></LeftButton>
      <FocusImage className="test" src={carousel.carouselPhotos[carousel.photoIndex].photo}></FocusImage>
      <RightButton onClick={moveIndexRight} ></RightButton>
      <PhotoDescription>{carousel.carouselPhotos[carousel.photoIndex].description}</PhotoDescription>
    </CarouselModal>
  )
}

//CSS via styled-components below:
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
`

const PhotoDescription = styled.figcaption`
  position: flex;
  text-align: center;
  color: gray;
`
const TopLeftButtons = styled.div`
  position: absolute;
  top 2%;
  left: 5%;
`;

const TopRightButtons = styled.div`
  position: absolute;
  top: 2%;
  right: 5%;
`;


const DirectionButton = styled.div`
  position: absolute;
  top: 50%;
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  border: 1px solid rgb(176, 176, 176);
  border-radius: 50%;

  &:hover {
    opacity: 75%;
  }
`;

const CloseModuleButton = styled.button`
  background-image: url("https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/CloseButton.png");
  height: 2.5em;
  width: 7em;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 10px;

  &:hover {
    opacity: 75%;
  }
`;

const ShowAllPhotosButton = styled(CloseModuleButton)`
  background-image: url("https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/ShowAllPhotos.png");
  width: 15em;
  border: 1px solid rgb(176, 176, 176);
`;

const LeftButton = styled(DirectionButton)`
  background-image: url("https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image4.png");
  left: 5%;
`;

const RightButton = styled(DirectionButton)`
  background-image: url("https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image2.png");
  right: 5%;
`;

export default Carousel;
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const TitleBar = ({
  listingName,
  listingStars,
  listingNumReviews,
  listingLocation,
  toggleFavorites,
  isFavorite,
}) => (
  <TitleWrapper>
    <Title>{listingName}</Title>
    <InfoBar>
      <div>
        <Reviews>
          <Star viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
            <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
          </Star>
          <NumStars>{listingStars}</NumStars>
          <NumReviews>{` (${listingNumReviews}) `}</NumReviews>
          <DotSeparater>·</DotSeparater>
          <Location>{listingLocation}</Location>
        </Reviews>
      </div>
      <TopRightButtons>
        <Button>
          <ButtonImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image5.png" />
          Share
        </Button>
        <Button onClick={toggleFavorites}>
          {isFavorite ? <HeartImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/Icons+2.0/Heart.png" id="heart" />
            : <HeartImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/Icons+2.0/EmptyHeart.png" id="no-heart" />}
          Save
        </Button>
      </TopRightButtons>
    </InfoBar>
  </TitleWrapper>
);

const TitleWrapper = styled.div`
  height: 62px;
  width: 100%;
  width: 80%;
  min-width: 500px;
  margin: auto;
`;

const Title = styled.div`
  width: 100%;
  font-family: sans-serif;
  font-size: 26px;
  font-weight: 550;
`;

const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  font-family: sans-serif;
  margin-top: 8px;
  font-size: 14px;
  height: 25px;
`;

const Reviews = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.svg`
  width: 14px;
  height: 14px;
  fill: rgb(255,56, 92);
`;

const NumStars = styled.div`
  font-family: sans-serif;
  font-weight: 800;
  font-size: 14px;
  text-decoration: bold;
  line-height: 20px;
  color: rgb(34, 34, 34);
  padding: 0px 5px;
`;

const NumReviews = styled.div`
  font-family: sans-serif;
  color: #717171;
`;

const DotSeparater = styled.span`
  font-size: 20px;
  padding: 0px 8px;
`;

const Location = styled.div`
  font-family: sans-serif;
  color: #717171;
  font-weight: 600;
  text-decoration: underline;
`;

const TopRightButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  user-select: none;
`;

const Button = styled.button`
  cursor: pointer;
  text-align: center;
  width: auto;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 550;
  border: none;
  background: transparent;
  text-decoration: underline;
  transform: translateY(-7px);
  padding: 7px;
  margin: 2px;
  background: white;
  border-radius: 7px;
  user-select: none;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: rgb(230, 230, 230);
  }
`;

const ButtonImage = styled.img`
  height: 12px;
  width: 12px;
  padding-right: 7px;
  pointer-events: none;
  user-select: none;
`;

const HeartImage = styled.img`
  height: 12px;
  width: 12px;
  background-color: transparent;
  user-select: none;
  cursor: pointer;
  padding-right: 7px;
`;

export default TitleBar;

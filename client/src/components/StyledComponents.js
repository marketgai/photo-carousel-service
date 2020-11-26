import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  text-align: center;
  width: auto;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  border: none;
  background: transparent;
  text-decoration: underline;
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

const RoundButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const LargeButtonImage = styled.img`
  height: 32px;
  width: 32px;
  padding: 16px;
  margin-right: 7px;
  background-color: black;
  border-radius: 10px;
  user-select: none;
`;

const FavoritesButtonImage = styled.img`
  height: 64px;
  width: 64px;
  margin-top: 7px;
  margin-right: 7px;
  border-radius: 10px;
  user-select: none;
`;

const Close = styled(Button)`
  text-decoration: none;
  font-weight: 500;
  width: auto;
  border-radius: 7px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background: rgb(230, 230, 230);
  padding: 8px 10.5px;
  margin-right: 20px;
  user-select: none;
  &:hover {
    background: gray;
  }
`;

const SwitchToMosaic = styled(Close)`
  background: white;
  border-color:black;
  user-select: none;
  padding: 8px 13px;
  margin-right: 0px;
  &:hover {
    background: rgb(230, 230, 230);
  }
`;

const ShowAllPhotos = styled.button`
  cursor: pointer;
  text-align: center;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 18px;
  border: none;
  padding: 7px;
  margin: 2px;
  text-decoration: none;
  font-weight: 500;
  width: auto;
  border-radius: 7px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background: rgb(230, 230, 230);
  padding: 8px 10.5px;
  margin-right: 20px;
  position: absolute;
  right: 13%;
  background: white;
  transform: translateY(-50px);
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

const SmallButtonImage = styled(ButtonImage)`
  height: 16px;
  width: 16px;
  padding: 0px;
`;

const TopRightButtons = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;
  top: 2%;
  right: 5%;
`;

const HeartImage = styled.img`
  height: 24px;
  width: 24px;
  background-color: transparent;
  user-select: none;
  cursor: pointer;
`;

export default {
  Button,
  ButtonImage,
  ShowAllPhotos,
  SwitchToMosaic,
  Close,
  TopRightButtons,
  LargeButtonImage,
  FavoritesButtonImage,
  HeartImage,
  SmallButtonImage,
  RoundButton,
};

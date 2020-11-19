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
`;

const Close = styled(Button)`
  text-decoration: none;
  width: auto;
  border-radius: 7px;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  background: rgb(230, 230, 230);
  padding: 7px;
  margin: 2px;
  &:hover {
    background: gray;
  }
`;

const SwitchToMosaic = styled(Close)`
  background: white;
  &:hover {
    background: rgb(230, 230, 230);
  }
`;

const ShowAllPhotos = styled(Close)`
  position: absolute;
  top: 53%;
  right: 13%;
  background: white;
  &:hover {
    background: rgb(230, 230, 230);
  }
`;

const TopRightButtons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 2%;
  right: 5%;
`;

export default {
  Button,
  ButtonImage,
  ShowAllPhotos,
  SwitchToMosaic,
  Close,
  TopRightButtons,
};

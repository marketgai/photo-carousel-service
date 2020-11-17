import styled from 'styled-components';

const ShowAllPhotos = styled.button`
background-image: url("https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/ShowAllPhotos.png");
height: 2.5em;
width: 7em;
background-repeat: no-repeat;
background-size: cover;
cursor: pointer;
border: 1px solid rgb(176, 176, 176);
border-radius: 10px;
width: 15em;
position: absolute;
right 5%;

&:hover {
  opacity: 75%;
}
`;

export default ShowAllPhotos;

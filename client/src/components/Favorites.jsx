import React from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import S from './StyledComponents.js';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 1,
      favorites: [],
      newListText: '',
      isCreatingNew: false,
    };
    this.loadFavorites = this.loadFavorites.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.updateFavorite = this.updateFavorite.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleFavoriteScreen = this.toggleFavoriteScreen.bind(this);
  }

  componentDidMount() {
    const { user } = this.state;
    this.loadFavorites(user);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      newListText: event.target.value,
    });
  }

  loadFavorites(userId) {
    axios.get(`/api/photo-carousel/favorites/${userId}`)
      .then((results) => {
        this.setState({
          favorites: results.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  toggleFavoriteScreen() {
    const toggleCreation = !this.state.isCreatingNew;
    this.setState({
      isCreatingNew: toggleCreation,
    });
  }

  addFavorite(newListName) {
    if (newListName === '') {
      return;
    }
    const listingId = Number(window.location.pathname.split('/')[1]);
    const newFavorite = {
      userId: this.state.user,
      listName: newListName,
      favoriteLists: [listingId],
      favoritePicture: this.props.mainPic,
    };

    axios.post('/api/photo-carousel/favorites', newFavorite)
      .then(this.loadFavorites(this.state.user))
      .then(() => {this.props.checkFavorite()})
      .then(this.setState({
        newListText: '',
      }))
      .then(() => {
        this.toggleFavoriteScreen();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateFavorite(event, fav) {
    event.preventDefault();
    const listingId = Number(window.location.pathname.split('/')[1]);
    let newFavList = fav.favoriteLists;
    if (event.target.id === 'heart') {
      newFavList = newFavList.filter((listing) => (Number(listing) !== Number(listingId)));
    } else {
      newFavList.push(listingId);
    }
    const updatedFavorite = {
      userId: this.state.user,
      listName: fav.listName,
      favoriteLists: newFavList,
    };
    axios.put('/api/photo-carousel/favorites', updatedFavorite)
      .then(this.loadFavorites(this.state.user))
      .then(() => {this.props.checkFavorite()})
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    function isFavorite(favoriteList) {
      const listingId = Number(window.location.pathname.split('/')[1]);
      let isOnFavoritesList = false;
      for (let i = 0; i < favoriteList.length; i += 1) {
        if (favoriteList[i] === listingId) {
          isOnFavoritesList = true;
        }
      }
      return isOnFavoritesList;
    }
    return (
      <FavoritesWrapper>
        <FavoritesModal>
          <InnerModal>
            <TopRow>
              <CloseButton onClick={this.props.toggleFavorites} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></CloseButton>
              <SaveText>Save to a list</SaveText>
              <EmptyDiv />
            </TopRow>
            <GrayLine />
            <FavLists>
              <div>
                <StyledEntry>
                  <S.LargeButtonImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/Icons+2.0/AddFav.png" onClick={() => this.toggleFavoriteScreen()} />
                  Create a new List
                </StyledEntry>
              </div>
              {this.state.favorites.map((fav) => (
                <StyledFav key={fav._id}>
                  <ImageAndText>
                    <S.FavoritesButtonImage src={fav.favoritePicture} />
                    {fav.listName}
                  </ImageAndText>
                  {isFavorite(fav.favoriteLists)
                  ? <S.HeartImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/Icons+2.0/Heart.png" id="heart" onClick={() => this.updateFavorite(event, fav)} />
                  : <S.HeartImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/Icons+2.0/EmptyHeart.png" id="no-heart" onClick={() => this.updateFavorite(event, fav)} />}
                </StyledFav>
              ))}
            </FavLists>
            <GrayLine />
            <BottomRow>
              <DoneButton onClick={this.props.toggleFavorites}>Done</DoneButton>
            </BottomRow>
          </InnerModal>
          {this.state.isCreatingNew ? (
            <AddNewWrapper>
              <AddNew>
                <TopRow>
                  <CloseButton onClick={this.toggleFavoriteScreen} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></CloseButton>
                  <SaveText>Name this list</SaveText>
                  <EmptyDiv />
                </TopRow>
                <GrayLine />
                <NewFavInput type="text" maxlength="50" value={this.state.newListText} onChange={this.handleChange} />
                <GrayLine />
                <BottomRow>
                  <CreateButton onClick={() => this.addFavorite(this.state.newListText)}>Create</CreateButton>
                </BottomRow>
              </AddNew>
            </AddNewWrapper>
          )
            : null}
        </FavoritesModal>
      </FavoritesWrapper>
    );
  }
}

const slideUp = keyframes`
  0% {
    height: 0px
  }
  100% {
    height: 100%
  }
`;

const fadeIn = keyframes`
  0% {
    background: rgba(50,50,50,0.0);
  }
  100% {
    background: rgba(50,50,50,0.6);
  }
`;

const FavoritesWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  left: 0px;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(50,50,50,0.6);
  z-index: 10;
  bottom: 0px;
  animation: 200ms ${fadeIn} ease-in;
`;

const FavoritesModal = styled.div`
  left: 0px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  bottom: 0px;
  animation: 400ms ${slideUp} ease-out;
`;

const StyledEntry = styled.div`
  display: flex;
  align-items: center;
  font-family: sans-serif;
  text-align: center;
  padding: 10px;
  &:hover {
    background: rgb(230, 230, 230);
  }
`;

const StyledFav = styled(StyledEntry)`
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.svg`
  display: absolute;
  fill: none;
  height: 16px;
  width: 16px;
  stroke:
  currentcolor;
  stroke-width: 3;
  z-index: 11;
  overflow: visible;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  padding: 8px;
  &:hover {
    background: rgb(230, 230, 230);
  }
`;

const SaveText = styled.div`
  display: absolute;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

const EmptyDiv = styled.div`
  height: 16px;
  width: 16px;
`;

const GrayLine = styled.hr`
  border-color: rgb(211,211,211);
  height: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const InnerModal = styled.div`
  min-width: 30%;
  max-height: 500px;
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  margin-top: 10%;
`;

const AddNewWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  left: 0px;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(50,50,50,0.6);
  z-index: 500;
  bottom: 0px;
  animation: 200ms ${fadeIn} ease-in;
`;

const AddNew = styled.div`
  position: fixed;
  min-width: 30%;
  max-height: 30%;
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  margin-top: 250px;
  z-index: 500;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FavLists = styled.div`
  height: 70%;
  overflow: auto;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NewFavInput = styled.input`
  width: 100%;
  border-radius: 10px;
  color: #C8C8C8
  font-family: sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  height: 60px;
  user-select: none;
  &:focus {
    outline: 0;
  }
`;

const DoneButton = styled.button`
  background-color: black;
  border-color: black;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  user-select: none;
`;

const CreateButton = styled.button`
  background-color: black;
  border-color: black;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  user-select: none;
  width: 100%;
  &:focus {
    outline: 0;
  }
`;

const ImageAndText = styled.div`
  display: flex;
  align-items: center;
`;

export default Favorites;

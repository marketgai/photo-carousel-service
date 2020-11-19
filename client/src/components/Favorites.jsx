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
    };
    this.loadFavorites = this.loadFavorites.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.updateFavorite = this.updateFavorite.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { user } = this.state;
    this.loadFavorites(user);
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

  addFavorite(newListName) {
    const listingId = parseInt(window.location.pathname.substring(20));
    console.log([listingId]);
    const newFavorite = {
      userId: this.state.user,
      listName: newListName,
      favoriteLists: [listingId],
    };
    axios.post('/api/photo-carousel/favorites', newFavorite)
      .then(this.loadFavorites(this.state.user))
      .catch((error) => {
        console.error(error);
      });
  }

  updateFavorite(event, fav) {
    event.preventDefault();
    let listingId = parseInt(window.location.pathname.substring(20));
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
      .catch((error) => {
        console.error(error);
      });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      newListText: event.target.value,
    });
  }

  render() {
    function isFavorite(favoriteList) {
      let listingId = parseInt(window.location.pathname.substring(20));
      let isFavorite = false;
      for (var i = 0; i < favoriteList.length; i++) {
        if (favoriteList[i] === listingId) {
          isFavorite = true;
        }
      }
      return isFavorite;
    }
    return (
      <FavoritesModal>
        <InnerModal>
          <h2>Save to a list</h2>
          <hr />
          <div>
            <div>
              <div onClick={() => this.addFavorite(this.state.newListText)}>
                <S.ButtonImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/AddIcon.png" />
              </div>
              Create a new List:
              <input type="text" value={this.state.newListText} onChange={this.handleChange} />
            </div>
            {this.state.favorites.map((fav) => (
              <div key={fav._id}>
                <div>
                  <div>
                    IMAGE
                    {fav.listName}
                  </div>
                  {isFavorite(fav.favoriteLists)
                  ? <button id="heart" onClick={() => this.updateFavorite(event, fav)}>
                      <S.ButtonImage src = "https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/Filled-Heart.png" />
                    </button>
                  : <button id="no-heart" onClick={() => this.updateFavorite(event, fav)}>
                      <S.ButtonImage src = "https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/Heart.png" />
                    </button>}
                </div>
              </div>
            ))}
          </div>
          <hr />
          <BottomRow>
            <DoneButton onClick={this.props.toggleFavorites}>Done</DoneButton>
          </BottomRow>
        </InnerModal>
      </FavoritesModal>
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

const FavoritesModal = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(50,50,50,0.6);
  z-index: 10;
  animation: 100ms ${slideUp} ease-out;
`;

const InnerModal = styled.div`
  width: 400px;
  height: auto;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DoneButton = styled.button`
  background-color: black;
  border-color: black;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px 20px;
  color: white;
`;

export default Favorites;

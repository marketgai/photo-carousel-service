import React from 'react';
import axios from 'axios';
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
      <div>
        <h2>Save to a list</h2>
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
        <button>DONE</button>
      </div>
    );
  }
}

export default Favorites;

import React from 'react';
import axios from 'axios';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 1,
      favorites: [],
    };
    this.loadFavorites = this.loadFavorites.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.updateFavorite = this.updateFavorite.bind(this);
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
        {this.state.favorites.map((fav, index) => (
          <div key={fav._id}>
            <div onClick={() => this.addFavorite('testText')}>IMAGE Add a new Favorite List</div>
            <div>
              <div>
                IMAGE
                {fav.listName}
              </div>
              {isFavorite(fav.favoriteLists)
              ? <div id="heart" onClick={() => this.updateFavorite(event, fav)}>Filled Heart</div>
              : <div id="noheart" onClick={() => this.updateFavorite(event, fav)}>Empty Heart</div>}
            </div>
          </div>
        ))}
        <button>DONE</button>
      </div>
    );
  }
}

export default Favorites;

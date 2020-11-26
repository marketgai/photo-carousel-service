/* eslint-disable no-loop-func */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header.jsx';
import TitleBar from './TitleBar.jsx';
import Gallery from './Gallery.jsx';
import Carousel from './Carousel.jsx';
import Mosaic from './Mosaic.jsx';
import Favorites from './Favorites.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselPhotos: [],
      showCarousel: false,
      showMosaic: false,
      showFavorites: false,
      photoIndex: 0,
      listingName: null,
      listingStars: null,
      listingNumReviews: null,
      listingLocation: null,
      isFavorite: false,
    };

    this.loadListingPhotos = this.loadListingPhotos.bind(this);
    this.toggleFavorites = this.toggleFavorites.bind(this);
    this.toggleCarousel = this.toggleCarousel.bind(this);
    this.toggleMosaic = this.toggleMosaic.bind(this);
    this.switchCarouselMosaic = this.switchCarouselMosaic.bind(this);
    this.moveIndexLeft = this.moveIndexLeft.bind(this);
    this.moveIndexRight = this.moveIndexRight.bind(this);
    this.checkFavorite = this.checkFavorite.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[1];
    this.loadListingPhotos(id);
    this.checkFavorite();
  }

  loadListingPhotos(id) {
    axios.get(`/api/photo-carousel/${id}/photos`)
      .then((results) => {
        this.setState({
          carouselPhotos: results.data,
          listingName: results.data[0].listingName,
          listingStars: results.data[0].listingStars,
          listingNumReviews: results.data[0].listingNumReviews,
          listingLocation: results.data[0].listingLocation,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  toggleFavorites(event) {
    event.preventDefault();
    const { showFavorites } = this.state;
    const favoritesToggle = !showFavorites;
    this.setState({
      showFavorites: favoritesToggle,
    });
  }

  toggleCarousel(event) {
    event.preventDefault();
    const { showCarousel } = this.state;
    const carouselToggle = !showCarousel;
    this.setState({
      showCarousel: carouselToggle,
      photoIndex: event.target.id,
    });
  }

  toggleMosaic(index) {
    const { showMosaic } = this.state;
    const mosaicToggle = !showMosaic;
    this.setState({
      showMosaic: mosaicToggle,
      photoIndex: index,
    });
  }

  switchCarouselMosaic(event) {
    event.preventDefault();
    const { showCarousel } = this.state;
    if (showCarousel) {
      this.setState({
        showMosaic: true,
      }, () => setTimeout(() => {
        this.setState({
          showCarousel: false,
        });
      }, 250));
    } else {
      this.setState({
        showCarousel: true,
        photoIndex: event.target.id,
      }, () => setTimeout(() => {
        this.setState({
          showMosaic: false,
        });
      }, 250));
    }
  }

  moveIndexLeft(event) {
    event.preventDefault();
    const { photoIndex } = this.state;
    const leftIndex = photoIndex > 0 ? photoIndex - 1 : 0;
    this.setState({
      photoIndex: leftIndex,
    });
  }

  moveIndexRight(event) {
    event.preventDefault();
    const { photoIndex, carouselPhotos } = this.state;
    const rightIndex = photoIndex === carouselPhotos.length - 1
      ? photoIndex : Number(photoIndex) + 1;
    this.setState({
      photoIndex: rightIndex,
    });
  }

  checkFavorite() {
    axios.get('/api/photo-carousel/favorites/1')
      .then((results) => {
        let isFavorite = false;
        const favorites = results.data;
        for (let i = 0; i < favorites.length; i += 1) {
          favorites[i].favoriteLists.forEach((fav) => {
            if (fav === Number(window.location.pathname.split('/')[1])) {
              isFavorite = true;
            }
          });
        }
        this.setState({
          isFavorite,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {
      showCarousel,
      carouselPhotos,
      showMosaic,
      showFavorites,
      listingName,
      listingStars,
      listingNumReviews,
      listingLocation,
      isFavorite,
    } = this.state;

    return (
      <div>
        <Header />
        <TitleBar
          listingName={listingName}
          listingStars={listingStars}
          listingNumReviews={listingNumReviews}
          listingLocation={listingLocation}
          toggleFavorites={this.toggleFavorites}
          isFavorite={isFavorite}
        />
        <Gallery
          carouselPhotos={carouselPhotos}
          toggleCarousel={this.toggleCarousel}
          height={100}
          width={100}
        />
        <ShowAllPhotos onClick={this.toggleMosaic}>
          <ButtonImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image25.png" />
          Show all photos
        </ShowAllPhotos>
        {showFavorites && <Favorites
          toggleFavorites={this.toggleFavorites}
          mainPic={carouselPhotos[0].photo}
          checkFavorite={this.checkFavorite}
        />}
        {showMosaic && <Mosaic
          photoCarousel={carouselPhotos}
          toggleMosaic={this.toggleMosaic}
          switchCarouselMosaic={this.switchCarouselMosaic}
        />}
        {showCarousel
        && <Carousel
          carousel={this.state}
          toggleCarousel={this.toggleCarousel}
          moveIndexLeft={this.moveIndexLeft}
          moveIndexRight={this.moveIndexRight}
          switchCarouselMosaic={this.switchCarouselMosaic}
          toggleFavorites={this.toggleFavorites}
          isFavorite={isFavorite}
        />}
      </div>
    );
  }
}

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

export default App;

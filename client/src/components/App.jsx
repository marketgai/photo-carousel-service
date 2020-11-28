/* eslint-disable no-loop-func */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
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
      isFavoriteClosing: false,
      isChanging: false,
      isRevealing: false,
    };

    this.loadListingPhotos = this.loadListingPhotos.bind(this);
    this.toggleFavorites = this.toggleFavorites.bind(this);
    this.toggleCarousel = this.toggleCarousel.bind(this);
    this.toggleMosaic = this.toggleMosaic.bind(this);
    this.switchCarouselMosaic = this.switchCarouselMosaic.bind(this);
    this.moveIndexLeft = this.moveIndexLeft.bind(this);
    this.moveIndexRight = this.moveIndexRight.bind(this);
    this.checkFavorite = this.checkFavorite.bind(this);
    this.fadeImageIn = this.fadeImageIn.bind(this);
    this.toggleRevealFalse = this.toggleRevealFalse.bind(this);
    this.removeFavoritesBackground = this.removeFavoritesBackground.bind(this);
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
    if (this.state.showFavorites) {
      this.setState({
        isFavoriteClosing: true,
      }, () => this.removeFavoritesBackground());
    } else {
      this.setState({
        showFavorites: favoritesToggle,
      });
    }
  }

  removeFavoritesBackground() {
    return setTimeout(this.setState.bind((this), {
      showFavorites: false,
      isFavoriteClosing: false,
    }), 200);
  }

  toggleCarousel(event) {
    event.preventDefault();
    const { showCarousel } = this.state;
    const carouselToggle = !showCarousel;
    if (showCarousel) {
      this.setState({
        showCarousel: carouselToggle,
        photoIndex: event.target.id,
        isRevealing: true,
      }, () => { this.toggleRevealFalse(); });
    } else {
      this.setState({
        showCarousel: carouselToggle,
        photoIndex: event.target.id,
      });
    }
  }

  toggleMosaic(index) {
    const { showMosaic } = this.state;
    const mosaicToggle = !showMosaic;
    if (showMosaic) {
      this.setState({
        showMosaic: mosaicToggle,
        photoIndex: index,
        isRevealing: true,
      }, () => { this.toggleRevealFalse(); });
    } else {
      this.setState({
        showMosaic: mosaicToggle,
        photoIndex: index,
      });
    }
  }

  toggleRevealFalse() {
    return setTimeout(this.setState.bind((this), {
      isRevealing: false,
    }), 300);
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
      }, 300));
    } else {
      this.setState({
        showCarousel: true,
        photoIndex: event.target.id,
      }, () => setTimeout(() => {
        this.setState({
          showMosaic: false,
        });
      }, 300));
    }
  }

  moveIndexLeft(event) {
    event.preventDefault();
    const { photoIndex } = this.state;
    const leftIndex = photoIndex > 0 ? photoIndex - 1 : 0;
    this.setState({
      isChanging: true,
    }, () => this.fadeImageIn(leftIndex));
  }

  moveIndexRight(event) {
    event.preventDefault();
    const { photoIndex, carouselPhotos } = this.state;
    const rightIndex = photoIndex === carouselPhotos.length - 1
      ? photoIndex : Number(photoIndex) + 1;
    this.setState({
      isChanging: true,
    }, () => this.fadeImageIn(rightIndex));
  }

  fadeImageIn(index) {
    return setTimeout(this.setState.bind((this), {
      photoIndex: index,
      isChanging: false,
    }), 100);
  }

  triggerPhotoChange() {
    return () => setTimeout(() => {
      this.setState({
        isChanging: false,
      });
    }, 150);
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
      isFavoriteClosing,
      isRevealing,
      isChanging,
      isClosing,
    } = this.state;

    (this.state.showFavorites || this.state.showMosaic || this.state.showCarousel) ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'scroll';

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
          isFavoriteClosing={isFavoriteClosing}
        />}
        {showMosaic && <Mosaic
          photoCarousel={carouselPhotos}
          toggleMosaic={this.toggleMosaic}
          switchCarouselMosaic={this.switchCarouselMosaic}
          isClosing={isClosing}
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
          isChanging={isChanging}
        />}
        {isRevealing && <SlideDownReveal />}
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
  right: 17%;
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

const slideDown = keyframes`
  0% {
    height: 100%;
    opacity: 1;
    z-index: 1000;
  }
  100% {
    height: 0px;
    opacity: 0;
    z-index: -1;
  }
`;

const SlideDownReveal = styled.div`
  position: fixed;
  background-color: white;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: 100vw;
  user-select: none;
  z-index: -1;
  animation: 300ms ${slideDown} ease-out;
`;

export default App;

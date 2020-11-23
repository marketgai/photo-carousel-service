/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import TitleBar from './TitleBar.jsx';
import Gallery from './Gallery.jsx';
import Carousel from './Carousel.jsx';
import Mosaic from './Mosaic.jsx';
import Favorites from './Favorites.jsx';
import Header from './Header.jsx';
import S from './StyledComponents.js';

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
    };
    this.loadListingPhotos = this.loadListingPhotos.bind(this);
    this.toggleCarousel = this.toggleCarousel.bind(this);
    this.moveIndexLeft = this.moveIndexLeft.bind(this);
    this.moveIndexRight = this.moveIndexRight.bind(this);
    this.toggleMosaic = this.toggleMosaic.bind(this);
    this.switchCarouselMosaic = this.switchCarouselMosaic.bind(this);
    this.toggleFavorites = this.toggleFavorites.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[1];
    this.loadListingPhotos(id);
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
    console.log(index);
    const { showMosaic } = this.state;
    const mosaicToggle = !showMosaic;
    this.setState({
      showMosaic: mosaicToggle,
      photoIndex: index,
    });
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
      }, 200));
    } else {
      this.setState({
        showCarousel: true,
        photoIndex: event.target.id,
      }, () => setTimeout(() => {
        this.setState({
          showMosaic: false,
        });
      }, 200));
    }
  }

  toggleFavorites(event) {
    event.preventDefault();
    const { showFavorites } = this.state;
    const favoritesToggle = !showFavorites;
    this.setState({
      showFavorites: favoritesToggle,
    });
  }

  render() {
    const { showCarousel, carouselPhotos, showMosaic, showFavorites, listingName, listingStars, listingNumReviews, listingLocation} = this.state;
    return (
      <div>
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
        />}
        <Header />
        <TitleBar
          listingName={listingName}
          listingStars={listingStars}
          listingNumReviews={listingNumReviews}
          listingLocation={listingLocation}
          toggleFavorites={this.toggleFavorites}
        />
        <Gallery
          carouselPhotos={carouselPhotos}
          toggleCarousel={this.toggleCarousel}
          height={100}
          width={100}
        />
        <S.ShowAllPhotos onClick={this.toggleMosaic}>
          <S.ButtonImage src="https://s3-us-west-1.amazonaws.com/fec.home.images/Icons+and+Buttons/image25.png" />
          Show all photos
        </S.ShowAllPhotos>
        {showFavorites && <Favorites toggleFavorites={this.toggleFavorites} />}
      </div>
    );
  }
}

export default App;

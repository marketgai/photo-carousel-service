/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import Gallery from './Gallery.jsx';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselPhotos: [],
      showCarousel: false,
      photoIndex: 0,
    };
    this.loadListingPhotos = this.loadListingPhotos.bind(this);
    this.toggleCarousel = this.toggleCarousel.bind(this);
    this.moveIndexLeft = this.moveIndexLeft.bind(this);
    this.moveIndexRight = this.moveIndexRight.bind(this);
  }

  componentDidMount() {
    this.loadListingPhotos(1);
  }

  loadListingPhotos(id) {
    axios.get(`/api/photo-carousel/${id}`)
      .then((results) => {
        this.setState({
          carouselPhotos: results.data,
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

  render() {
    const { showCarousel, carouselPhotos } = this.state;
    return (
      <div>
        {showCarousel
        && <Carousel
          carousel={this.state}
          toggleCarousel={this.toggleCarousel}
          moveIndexLeft={this.moveIndexLeft}
          moveIndexRight={this.moveIndexRight}
        />}
        <h1>Photo Carousel Component</h1>
        <button>FAVORITES</button>
        <Gallery
          carouselPhotos={carouselPhotos}
          toggleCarousel={this.toggleCarousel}
          height={100}
          width={100}
        />
        <button>Show All Photos</button>
      </div>
    );
  }
}

export default App;

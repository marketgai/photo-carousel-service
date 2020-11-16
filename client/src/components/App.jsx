import React from 'react';
import styled from 'styled-components';
import Gallery from './Gallery.jsx';
import Carousel from './Carousel.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselPhotos: [],
      showCarousel: false,
      photoIndex: 1,
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
      .then(results => {
        this.setState({
          carouselPhotos: results.data
        });
      })
      .catch(error => console.log(error));
  }

  toggleCarousel(event) {
    event.preventDefault();
    const carouselToggle = !this.state.showCarousel
    this.setState({
      showCarousel: carouselToggle,
      photoIndex: event.target.id
    })
  }

  moveIndexLeft(event) {
    event.preventDefault();
    const leftIndex = this.state.photoIndex > 0 ? this.state.photoIndex - 1 : 0;
    this.setState({
      photoIndex: leftIndex
    })
  }

  moveIndexRight(event) {
    event.preventDefault();
    console.log(this.state.photoIndex);
    const rightIndex = parseInt(this.state.photoIndex) === this.state.carouselPhotos.length - 1 ? this.state.photoIndex : parseInt(this.state.photoIndex) + 1;
    console.log(rightIndex);
    this.setState({
      photoIndex: rightIndex
    })
  }

  render() {
    return (
      <div>
        {this.state.showCarousel && <Carousel carousel={this.state} toggleCarousel={this.toggleCarousel} moveIndexLeft={this.moveIndexLeft} moveIndexRight={this.moveIndexRight} />}
        <h1>Tim's Photo Carousel</h1>
        <button>FAVORITES</button>
        <Gallery carouselPhotos={this.state.carouselPhotos} toggleCarousel={this.toggleCarousel} height={100} width={100} />
        <button>Show All Photos</button>
      </div>
    );
  }
}

export default App;
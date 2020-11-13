import React from 'react';
import Gallery from './Gallery.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselPhotos: []
    };
    this.loadListingPhotos = this.loadListingPhotos.bind(this);
  }

  componentDidMount() {
    this.loadListingPhotos(1);
  }

  loadListingPhotos(id) {
    axios.get(`/api/photo-carousel/${id}`)
      .then(results => {
        console.log(results.data);
        this.setState({
          carouselPhotos: results.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Tim's Photo Carousel</h1>
        <Gallery carouselPhotos={this.state.carouselPhotos} />
      </div>
    );
  }
}

export default App;
const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost/photoCarousel', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to mongoose!'));

const photoCarouselSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  listingId: Number,
  photo: String,
  description: String
});

const PhotoCarousel = mongoose.model('photoCarousel', photoCarouselSchema);

module.exports = PhotoCarousel;
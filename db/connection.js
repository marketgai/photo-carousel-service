const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photoCarousel', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to mongoose!'));

const photoCarouselSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  listingId: Number,
  photo: String,
  description: String,
  listingName: String,
  listingStars: Number,
  listingNumReviews: Number,
  listingLocation: String,
});

const userFavoritesSchema = new mongoose.Schema({
  userId: Number,
  listName: String,
  favoriteLists: Array,
});

const PhotoCarousel = mongoose.model('photoCarousel', photoCarouselSchema);
const UserFavorite = mongoose.model('userFavorites', userFavoritesSchema);

module.exports.PhotoCarousel = PhotoCarousel;
module.exports.UserFavorite = UserFavorite;

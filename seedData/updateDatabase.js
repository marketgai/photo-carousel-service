const seed = require('./seed.js');
const db = require('../db/connection.js');

const seedListings = seed.generateSeedData();
const seedFavorites = seed.generateFavoriteListings();

//Drop current collection if present
db.PhotoCarousel.collection.drop();
//Populate database
db.PhotoCarousel.insertMany(seedListings, (error, documents) => {
  if (error) {
    console.log(error);
  } else {
    console.log('documents added to database');
  }
});

//Drop current collection if present
db.UserFavorite.collection.drop();
//Populate database
db.UserFavorite.insertMany(seedFavorites, (error, documents) => {
  if (error) {
    console.log(error);
  } else {
    console.log('documents added to database');
  }
});
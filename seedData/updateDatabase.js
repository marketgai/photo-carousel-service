const generateSeedData = require('./seed.js');
const db = require('../db/connection.js');

const seedData = generateSeedData();

//Drop current collection if present
db.PhotoCarousel.collection.drop();
//Populate database
db.PhotoCarousel.insertMany(seedData, (error, documents) => {
  if (error) {
    console.log(error);
  } else {
    console.log('documents added to database');
  }
});

const generateSeedData = require('./seed.js');
const db = require('../db/connection.js');

const seedData = generateSeedData();

//Drop current collection if present
db.collection.drop();
//Populate database
db.insertMany(seedData, (error, documents) => {
  if (error) {
    console.log(error);
  } else {
    console.log('documents added to database');
  }
});

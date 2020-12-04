const faker = require('faker');

//write script to generate images from loremflicker
//save images in specific naming convention
//upload to aws

//generate fake data with faker
randInt = (n) => {
  return Math.floor(Math.random() * (n + 1));
};

randArrayOfNums = (n) => {
  let result = [];
  for (var i = 0; i < randInt(10); i++) {
    result.push(randInt(n));
  }
  return result;
};

createListings = () => {
  let document = {
    listingId          : randInt(10),
    listingName        : faker.lorem.words(3),
    listingDescription : faker.lorem.sentence(),
    listingLocation    : faker.address.city() + ', ' + faker.address.stateAbbr(),
    listingStars       : faker.random.float(1),
    listingNumReviews  : randInt(100000),
    photos             : [
      {
        photoId  : randInt(100000),
        photoUrl : 'add url here'
      }
    ]
  };

  //INSERT document INTO stayio.listings;
};

createUsers = () => {
  let document = {
    userId   : randInt(10),
    userName : faker.random.float(1),
    favLists : [
      {
        listId    : randInt(10),
        listName  : faker.lorem.words(),
        favorites : randArrayOfNums(10)
      }
    ]
  };

  //INSERT document INTO stayio.users;
};

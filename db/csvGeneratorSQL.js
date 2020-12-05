const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const randListing = require('./pregenerated/randNums');

const writer = csvWriter();
// const userWriter = csvWriter();

//helper functions----------------------------------------------
let lastIndex = 0;
numFromArray = () => {
  lastIndex += 1;
  return randListing[lastIndex];
};

randInt = (n) => {
  return Math.floor(Math.random() * (n + 1));
};

randomNumBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);

randArrayOfNums = (n) => {
  let result = [];
  for (var i = 0; i < randInt(10); i++) {
    result.push(randInt(n));
  }
  return result;
};

photoGenerator = () => {
  return `https://stayio.s3-us-west-1.amazonaws.com/Airbnb_images/home${randInt(1000)}.jpg`;
};

createListing = () => {
  let listing = {
    // listingId          : randInt(10000000),
    listingName        : faker.lorem.words(3),
    listingDescription : faker.lorem.sentence(),
    listingLocation    : faker.address.city() + ', ' + faker.address.stateAbbr(),
    listingStars       : faker.random.float(1),
    listingNumReviews  : randInt(100000)
  };
  return listing;
};

createPhoto = () => {
  let photo = {
    // photoId: randInt(100000),
    listingId        : randInt(10000000),
    photoUrl         : photoGenerator(),
    photoDescription : faker.lorem.sentence()
  };
  return photo;
};

createUser = () => {
  let user = {
    // userId    : randInt(1000000),
    userName  : faker.random.float(1),
    listId    : randInt(1000000),
    listName  : faker.lorem.words(),
    favorites : randArrayOfNums(10)
  };
  return user;
};

createUserList = () => {
  let userList = {
    // listId:
    userId   : randInt(1000000),
    listName : faker.lorem.words()
  };
  return userList;
};

createFavListings = () => {
  let favListing = {
    // favid
    listId    : randInt(10000000),
    listingId : randInt(10000000)
  };
  return favListing;
};

const dataGen = (i, name, createFunc, cb) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(__dirname + `/csv/${name}.csv`));

  function write() {
    let ok = true;
    do {
      if (i % 1000000 === 0) {
        console.log(i);
      }
      i--;
      let newItem = createFunc();
      if (i === 0) {
        writer.write(newItem, cb);
      } else {
        ok = writer.write(newItem);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
};

const endCallback = () => {
  writer.end();
};

dataGen(100, 'listingsSQL', createListing, () => {
  writer.end();
});

dataGen(100, 'usersSQL', createUser, endCallback);

dataGen(100, 'photoSQL', createPhoto, endCallback);

dataGen(100, 'userListSQL', createUserList, endCallback);

dataGen(100, 'favListingsSQL', createFavListings, endCallback);

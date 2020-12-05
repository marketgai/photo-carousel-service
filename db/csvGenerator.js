const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const listingWriter = csvWriter();
const userWriter = csvWriter();

//helper functions----------------------------------------------

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
  let document = {
    listingId          : randInt(10000000),
    listingName        : faker.lorem.words(3),
    listingDescription : faker.lorem.sentence(),
    listingLocation    : faker.address.city() + ', ' + faker.address.stateAbbr(),
    listingStars       : faker.random.float(1),
    listingNumReviews  : randInt(100000),
    photoId            : randInt(100000),
    photoUrl           : photoGenerator(),
    photoDescription   : faker.lorem.sentence()
  };
  return document;
};

createUser = () => {
  let document = {
    userId    : randInt(1000000),
    userName  : faker.random.float(1),
    listId    : randInt(1000000),
    listName  : faker.lorem.words(),
    favorites : randArrayOfNums(10)
  };
  return document;
};
//----------------------------------------------------------------

const listingDataGen = (i, cb) => {
  listingWriter.pipe(fs.createWriteStream('./db/csv/listingData.csv'));

  function write() {
    let ok = true;
    do {
      if (i % 1000000 === 0) {
        console.log(i);
      }
      i--;
      let newListing = createListing();
      if (i === 0) {
        listingWriter.write(newListing, cb);
      } else {
        ok = listingWriter.write(newListing);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      listingWriter.once('drain', write);
    }
  }
  write();
};

const userDataGen = (i, cb) => {
  userWriter.pipe(fs.createWriteStream('./db/csv/userData.csv'));

  function write() {
    let ok = true;
    do {
      i--;
      let newUser = createUser();
      if (i === 0) {
        userWriter.write(newUser, cb);
      } else {
        ok = userWriter.write(newUser);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      userWriter.once('drain', write);
    }
  }
  write();
};

listingDataGen(10000000, () => {
  listingWriter.end();
});

userDataGen(1000000, () => {
  userWriter.end();
});

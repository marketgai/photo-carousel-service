const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const milTenMil = require('./pregenerated/milTenMil');
const milThousand = require('./pregenerated/milThousand');

const writer = csvWriter();

//helper functions----------------------------------------------
let lastIndex = 0;
randNumTenMil = () => {
  if (lastIndex >= 1000000) {
    lastIndex = randInt(10);
  }
  lastIndex += 1;
  return milTenMil[lastIndex];
};

let thouIndex = 0;
randNumThousand = () => {
  if (thouIndex >= 1000000) {
    thouIndex = randInt(10);
  }
  thouIndex += 1;
  return milTenMil[thouIndex];
};

randInt = (n) => {
  return Math.floor(Math.random() * n) + 1;
};

randomNumBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);

randArrayOfListings = () => {
  let result = [];
  for (var i = 0; i < randInt(10); i++) {
    result.push(randNumTenMil());
  }
  return result;
};

photoGenerator = () => {
  return `https://stayio.s3-us-west-1.amazonaws.com/Airbnb_images/home${randNumThousand()}.jpg`;
};

createListing = () => {
  let listing = {
    // listingId          : 0,
    listingName        : faker.lorem.words(3),
    listingDescription : faker.lorem.sentence(),
    listingLocation    : faker.address.city(),
    listingStars       : randInt(50)/10,
    listingNumReviews  : randNumThousand()
  };
  return listing;
};

createPhoto = () => {
  let photo = {
    // photoId          : 0,
    listingId        : randNumTenMil(),
    photoUrl         : photoGenerator(),
    photoDescription : faker.lorem.sentence()
  };
  return photo;
};

createUser = () => {
  let user = {
    // userId    : 0,
    userName  : faker.lorem.word()
  };
  return user;
};

createUserList = () => {
  let userList = {
    // listId   : 0,
    userId   : randNumTenMil(),
    listName : faker.lorem.words()
  };
  return userList;
};

createFavListings = () => {
  let favListing = {
    // favid     : 0,
    listId    : randNumTenMil(),
    listingId : randNumTenMil()
  };
  return favListing;
};

const dataGen = (i, name, createFunc, cb) => {
  console.time(name);
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(__dirname + `/csv/${name}.csv`));

  function write() {
    let ok = true;
    do {
      if (i % 1000000 === 0) {
        console.log(name, i);
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

dataGen(100, 'listingsSQL', createListing, () => {
  writer.end();
  console.timeEnd('listingsSQL');
});

dataGen(100, 'usersSQL', createUser, () => {
  writer.end();
  console.timeEnd('usersSQL');
});

dataGen(400, 'photosSQL', createPhoto, () => {
  writer.end();
  console.timeEnd('photosSQL');
});

dataGen(300, 'userListsSQL', createUserList, () => {
  writer.end();
  console.timeEnd('userListsSQL');
});

dataGen(500, 'favListingsSQL', createFavListings, () => {
  writer.end();
  console.timeEnd('favListingsSQL');
});

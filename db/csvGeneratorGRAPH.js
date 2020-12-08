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

// randArrayOfListings = () => {
//   let result = [];
//   for (var i = 0; i < randInt(10); i++) {
//     result.push(randNumTenMil());
//   }
//   return result;
// };

randArrayOfPhotos = () => {
  let result = [];
  for (var i = 0; i < randInt(10); i++) {
    result.push(randNumTenMil());
  }
  return result;
}

photoGenerator = () => {
  return `https://stayio.s3-us-west-1.amazonaws.com/Airbnb_images/home${randNumThousand()}.jpg`;
};

// let listingNum = 1;
// let userNum = 1;
// let favListNum = 1;

createListing = () => {
  let listing = {
    // listingId          : listingNum,
    listingName        : faker.lorem.words(3),
    listingDescription : faker.lorem.sentence(),
    listingLocation    : faker.address.city() + ', ' + faker.address.stateAbbr(),
    listingStars       : faker.random.float(1),
    listingNumReviews  : randNumTenMil(),
    photos: randArrayOfPhotos()
  };
  // listingNum++;
  return listing;
};

// createPhoto = () => {
//   let photo = {
//     // photoId: randInt(100000),
//     listingId        : randNumTenMil(),
//     photoUrl         : photoGenerator(),
//     photoDescription : faker.lorem.sentence()
//   };
//   return photo;
// };

createUser = () => {
  let user = {
    // userId   : userNum,
    userName : faker.random.float(1),
    listId   : randNumTenMil(),
    listName : faker.lorem.words()
    // favorites : randArrayOfListings()
  };
  // userNum++;
  return user;
};

createFavList = () => {
  let favList = {
    // favlistId   : favListNum,
    userId      : randNumTenMil(),
    favlistName : faker.lorem.words()
  };
  // favListNum++;
  return favList;
};

// createFavListings = () => {
//   let favListing = {
//     // favid
//     listId    : randNumTenMil(),
//     listingId : randNumTenMil()
//   };
//   return favListing;
// };

createOwnsEdge = () => {
  let ownsEdge = {
    _from : 'user/' + randInt(10),
    _to   : 'favList/' + randInt(100)
  };
  return ownsEdge;
};

createContainsEdge = () => {
  let containsEdge = {
    _from : 'favList/' + randInt(100),
    _to   : 'listing/' + randInt(100)
  };
  return containsEdge;
};

const dataGen = (i, name, createFunc, cb) => {
  console.time(name);
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(__dirname + `/csv/graph/${name}.csv`));

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

dataGen(1000, 'graphListing', createListing, () => {
  writer.end();
  console.timeEnd('graphListing');
});

dataGen(10, 'graphUser', createUser, () => {
  writer.end();
  console.timeEnd('graphUser');
});

dataGen(100, 'graphOwnsEdge', createOwnsEdge, () => {
  writer.end();
  console.timeEnd('graphOwnsEdge');
});

dataGen(100, 'graphFavList', createFavList, () => {
  writer.end();
  console.timeEnd('graphFavList');
});

dataGen(1000, 'graphContainsEdge', createContainsEdge, () => {
  writer.end();
  console.timeEnd('graphContainsEdge');
});

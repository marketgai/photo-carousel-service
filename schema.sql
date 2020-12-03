DROP SCHEMA stayio CASCADE

CREATE SCHEMA stayio


CREATE TABLE stayio.listing (
  listingId SERIAL NOT NULL PRIMARY KEY,
  listingName VARCHAR(100) NOT NULL,
  listingDescription VARCHAR(1000),
  listingLocation VARCHAR (100),
  listingStars REAL,
  listingNumReviews SMALLINT,
);

CREATE TABLE stayio.photos (
  photoId SERIAL NOT NULL PRIMARY KEY,
  listingId INT NOT NULL REFERENCES listing.listingId,
  photoUrl VARCHAR(250) NOT NULL
);

CREATE TABLE stayio.userFavLists(
  listId SERIAL NOT NULL PRIMARY KEY,
  listName VARCHAR(100) NOT NULL,
  favoritePic INT REFERENCES listing.listingId
);

CREATE TABLE stayio.users (
  UserId SERIAL PRIMARY KEY
  UserName VARCHAR(100)
);
DROP SCHEMA stayio CASCADE

CREATE SCHEMA stayio


CREATE TABLE stayio.listing (
  listingId uuid NOT NULL PRIMARY KEY,
  listingName VARCHAR(100) NOT NULL,
  listingDescription VARCHAR(1000),
  listingLocation VARCHAR (100),
  listingStars REAL,
  listingNumReviews SMALLINT,
);

CREATE TABLE stayio.photos (
  photoId uuid NOT NULL PRIMARY KEY,
  listingId INT NOT NULL REFERENCES listing.listingId,
  photoUrl VARCHAR(250) NOT NULL
);

CREATE TABLE stayio.favLists(
  listId uuid NOT NULL PRIMARY KEY,
  listName VARCHAR(100) NOT NULL,
  order INT
);

CREATE TABLE stayio.users (
  userId uuid PRIMARY KEY
  userName VARCHAR(100)
);
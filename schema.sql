DROP SCHEMA stayio CASCADE;

CREATE SCHEMA stayio;

DROP TABLE IF EXISTS stayio.listings;
CREATE TABLE stayio.listings (
  listingId INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
  listingName VARCHAR(100) NOT NULL,
  listingDescription VARCHAR(1000),
  listingLocation VARCHAR (100),
  listingStars REAL,
  listingNumReviews INT,
  photos TEXT[]
);

-- CREATE TABLE stayio.photos (
--   photoId INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
--   listingId INT NOT NULL ,
--   -- REFERENCES listing.listingId,
--   photoDescription VARCHAR (250),
--   photoUrl VARCHAR(250) NOT NULL
-- );
DROP TABLE IF EXISTS stayio.users;
CREATE TABLE stayio.users (
  userId INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
  userName VARCHAR(100)
);

DROP TABLE IF EXISTS stayio.userLists;
CREATE TABLE stayio.userLists(
  listId INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
  userId INT NOT NULL,
  -- REFERENCES users.userId
  listName VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS stayio.favListings;
CREATE TABLE stayio.favListings (
id INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
listId INT,
-- REFERENCES userLists.listId
listingId INT
-- REFERENCES listing.listingId
);

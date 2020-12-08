SET search_path TO stayio;

COPY stayio.listings(listingName, listingDescription, listingLocation, listingStars, listingNumReviews)
FROM '/Users/marcuslee/Desktop/HR/SDC/service/db/csv/listingsSQL.csv'
WITH (DELIMITER',', FORMAT CSV, HEADER true);

COPY stayio.photos(listingId, photoDescription, photoUrl)
FROM '/Users/marcuslee/Desktop/HR/SDC/service/db/csv/photosSQL.csv'
WITH (DELIMITER',', FORMAT CSV, HEADER true);

COPY stayio.users(userName)
FROM '/Users/marcuslee/Desktop/HR/SDC/service/db/csv/usersSQL.csv'
WITH (DELIMITER',', FORMAT CSV, HEADER true);

COPY stayio.userLists(userId, listName)
FROM '/Users/marcuslee/Desktop/HR/SDC/service/db/csv/userListsSQL.csv'
WITH (DELIMITER',', FORMAT CSV, HEADER true);

COPY stayio.favListings(listId, listingId)
FROM '/Users/marcuslee/Desktop/HR/SDC/service/db/csv/favListingsSQL.csv'
WITH (DELIMITER',', FORMAT CSV, HEADER true);
// db._dropDatabase("stayio");

db._createDatabase('stayio');
db._useDatabase('stayio');

collection = db.collection('listings');

collection
  .create()
  .then(
    () => console.log('listings collection created'),
    (err) => console.error('failed to create listings collection:', err)
  );

doc = {
  listingId          : number,
  listingName        : string,
  listingDescription : string,
  listingLocation    : string,
  listingStars       : number,
  listingNumReviews  : number,
  photos             : [
    {
      photoId  : number,
      photoUrl : string
    }
  ]
};

collection = db.collection('users');

collection
  .create()
  .then(
    () => console.log('users collection created'),
    (err) => console.error('failed to create users collection:', err)
  );

doc = {
  userId   : number,
  userName : string,
  lists    : [
    {
      listId    : number,
      listName  : string,
      favorites : array
    }
  ]
};

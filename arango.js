// db._dropDatabase("stayio");

db._createDatabase('teststayio');
db._useDatabase('teststayio');

collection = db.collection('listings');

collection
  .create()
  .then(
    () => console.log('listings collection created'),
    (err) => console.error('failed to create listings collection:', err)
  );

// doc = {
//   listingId          : number,
//   listingName        : string,
//   listingDescription : string,
//   listingLocation    : string,
//   listingStars       : number,
//   listingNumReviews  : number,
//   photos             : [
//     {
//       photoId  : number,
//       photoUrl : string,
//       photoDescription: string
//     }
//   ]
// };

listingSchema = {
  rule : {
    type       : 'object',
    properties : {
      listingId         : {
        type : 'number'
      },
      listingName       : {
        type : 'string'
      },
      listingLocation   : {
        type : 'string'
      },
      ListingStars      : {
        type : 'number'
      },
      listingNumReviews : {
        type : 'number'
      },
      photos            : {
        type  : 'array',
        items : {
          title      : 'photo',
          type       : 'object',
          properties : {
            photoId          : {
              type : 'number'
            },
            photoUrl         : {
              type : 'string'
            },
            photoDescription : {
              type : 'string'
            }
          }
        }
      }
    }
  }
};

collection = db.collection('users');

collection
  .create()
  .then(
    () => console.log('users collection created'),
    (err) => console.error('failed to create users collection:', err)
  );

// doc = {
//   userId   : number,
//   userName : string,
//   //host: boolean
//   lists    : [
//     {
//       listId    : number,
//       listName  : string,
//       favorites : arrayoflistings
//     }
//   ]
// };

userSchema = {
  rule : {
    type       : 'object',
    properties : {
      userId   : {
        type : 'number'
      },
      userName : {
        type : 'string'
      },
      favLists : {
        type : 'array',
        list : {
          title      : 'list',
          type       : 'object',
          properties : {
            listId    : {
              type : 'number'
            },
            listName  : {
              type : 'string'
            },
            favorites : {
              type  : 'array',
              items : {
                type        : 'number',
                description : 'listingId of favorite'
              }
            }
          }
        }
      }
    }
  }
};

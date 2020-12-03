# Project Name
Stay.io
> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents
1. [API Docs]
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## API Docs
1. ### GET - get photos from database
  **endpoint - '/api/photo-carousel/:id/photos/'**

  **path params - none**

  **response object** - an array of

    ```{
        "listingId": "Number,
        "photo": "String",
        "description": "String" ,
        "listingName": "String",
        "listingStars": "Number,
        "listingNumReviews": "Number
        "listingLocation": "String",
    },```

  **success - 200**

1. ### GET - get favorites from database
  **endpoint - '/api/photo-carousel/favorites/:userId/'**

  **path params: userID**

  **req.body - 'userID'**

  **response object** - an array of
    ```
    {
        "favoriteLists": [
            array of listing IDs
        ],
        "_id": "mongo ID,
        "userId": userID,
        "listName": listName,
        "favoritePicture": "https://s3-us-west-1.amazonaws.com/fec.home.images/Optimized/photo-1587023705100-8094f8d47e86_optimized.jpg",
        "__v": 0
    },
    ```

  **success - 200**

1. ### POST - post favorites

  **endpoint - '/api/photo-carousel/favorites/'**

  **path params - listing ID**

  ***response - none**

  **success- 200**

1. ### PUT -  update favorite

  **endpoint - '/api/photo-carousel/favorites/'**

  **path params - listing ID**

  **response - none**

  **success - 200**

1. ### DELETE - delete favorite

**endpoint - '/api/photo-carousel/favorites'**

**path params - listing ID**

**response - none**

**success - 200**

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Style Guide
Refer to the [AirBnb Style Guide](https://github.com/airbnb/javascript).

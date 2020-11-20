/* eslint-disable */
const seed = require('../seedData/seed.js');

//Maybe a new test checking for duplicates for a user

test('Number of photo data entries should be between 500 and 1500', () => {
  const numDataEntries = seed.generateSeedData().length;
  expect(numDataEntries).toBeGreaterThanOrEqual(500);
  expect(numDataEntries).toBeLessThanOrEqual(1500);
});

test('Number of favorites data entries should be between 3 and 8 per user category', () => {
  const favorites = seed.generateFavoriteListings();
  let isWithinNumberFavoritesRange = true;
  favorites.forEach(favorite => {
    if (favorite.favoriteLists.length < 3 || favorite.favoriteLists.length > 8) {
      isWithinNumberFavoritesRange = false;
    }
  });
  expect(isWithinNumberFavoritesRange).toBe(true);
});

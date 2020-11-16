const seed = require('./seedData/seed.js');

//100 Listings should each have between 5 and 15 photos (inclusive), so there should be between 500 and 1500 total data entries created
test('Number of data entries should be between 500 and 1500', () => {
  const numDataEntries = seed.generateSeedData().length;
  expect(numDataEntries).toBeGreaterThanOrEqual(500);
  expect(numDataEntries).toBeLessThanOrEqual(1500);
});
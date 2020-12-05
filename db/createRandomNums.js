const fs = require('fs');

randInt = (n) => {
  return Math.floor(Math.random() * (n + 1));
};

const createRandomNumArrays = (n, max) => {
  let result = [];
  for (var i = 0; i < n; i++) {
    result.push(randInt(max));
  }
  return result;
};

const randArray = createRandomNumArrays(1000, 10000000);

const storeArray = (data, path) => {
  try {
    fs.writeFileSync(path, data);
  } catch (err) {
    console.log(err);
  }
};

storeArray(randArray, __dirname + `/pregenerated/randNums.js`);

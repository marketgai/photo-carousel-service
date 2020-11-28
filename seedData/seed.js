const faker = require('faker');

const images = [
  'photo-1603825394551-2e7eaace6a2a_optimized.jpg',
  'photo-1603568534543-29a3328479f2_optimized.jpg',
  'photo-1602071079885-2ea06d63f2d8_optimized.jpg',
  'photo-1601883754638-b95a88fac8e1_optimized.jpg',
  'photo-1600585152220-90363fe7e115_optimized.jpg',
  'photo-1599619351208-3e6c839d6828_optimized.jpg',
  'photo-1599421987956-39409b054686_optimized.jpg',
  'photo-1599083549548-a307e72433ad_optimized.jpg',
  'photo-1598881779612-5892a1da66aa_optimized.jpg',
  'photo-1597093373253-00036aaee376_optimized.jpg',
  'photo-1595238416701-ea154c5dadd2_optimized.jpg',
  'photo-1593853963555-013dbf33c060_optimized.jpg',
  'photo-1593226525905-0e11ed887f53_optimized.jpg',
  'photo-1592864473192-9b5af0a1b4f8_optimized.jpg',
  'photo-1591924450983-b8f7587ea332_optimized.jpg',
  'photo-1591434132137-37d04c53197e_optimized.jpg',
  'photo-1590415555114-d308bf24212e_optimized.jpg',
  'photo-1589824783837-6169889fa20f_optimized.jpg',
  'photo-1589554882481-e2a621b0eef3_optimized.jpg',
  'photo-1589154587853-da70e391f38a_optimized.jpg',
  'photo-1588854337221-4cf9fa96059c_optimized.jpg',
  'photo-1588625500633-a0cd518f0f60_optimized.jpg',
  'photo-1587023705100-8094f8d47e86_optimized.jpg',
  'photo-1586783814585-98fc57facced_optimized.jpg',
  'photo-1586023492125-27b2c045efd7_optimized.jpg',
  'photo-1585469434395-ac3d72767035_optimized.jpg',
  'photo-1585412727254-46e14627b8df_optimized.jpg',
  'photo-1584622650111-993a426fbf0a_optimized.jpg',
  'photo-1584406445076-88e095f28f4c_optimized.jpg',
  'photo-1584276989744-ec20b2017c3b_optimized.jpg',
  'photo-1584146812940-359fb518214c_optimized.jpg',
  'photo-1583847268964-b28dc8f51f92_optimized.jpg',
  'photo-1583135630256-a25ea659d1d7_optimized.jpg',
  'photo-1582913130063-8318329a94a3_optimized.jpg',
  'photo-1581879608672-f4b28f26c348_optimized.jpg',
  'photo-1580077394437-3f4aef8f6450_optimized.jpg',
  'photo-1579511038791-539f00d23312_optimized.jpg',
  'photo-1578225328621-b5b724300e0c_optimized.jpg',
  'photo-1577962224182-d9e092fa4740_optimized.jpg',
  'photo-1576698483491-8c43f0862543_optimized.jpg',
  'photo-1576009278388-d8cf6bc28e1b_optimized.jpg',
  'photo-1575471336446-ff5818dff4f1_optimized.jpg',
  'photo-1575413910034-874a7447699f_optimized.jpg',
  'photo-1575413905463-3750e44edafe_optimized.jpg',
  'photo-1574791627483-7c9fc465eab7_optimized.jpg',
  'photo-1574739782594-db4ead022697_optimized.jpg',
  'photo-1574643156929-51fa098b0394_optimized.jpg',
  'photo-1574598837979-e673fb971687_optimized.jpg',
  'photo-1574118140238-fd751a59eabb_optimized.jpg',
  'photo-1573255104932-7c6eff00345f_optimized.jpg',
  'photo-1573168710865-2e4c680d921a_optimized.jpg',
  'photo-1573168710465-7f7da9a23a15_optimized.jpg',
  'photo-1573088422077-b6ed78408ff4_optimized.jpg',
  'photo-1572891086295-6c1c7c476549_optimized.jpg',
  'photo-1572805773780-a02f06ea4798_optimized.jpg',
  'photo-1572496973076-dc34056ceb87_optimized.jpg',
  'photo-1571843439991-dd2b8e051966_optimized.jpg',
  'photo-1571712704100-5cade806bf6d_optimized.jpg',
  'photo-1571673638846-2adffccdc689_optimized.jpg',
  'photo-1571512051140-becad1ff6a0e_optimized.jpg',
  'photo-1570439484439-73079fa1b6b8_optimized.jpg',
  'photo-1569377750206-a249f7b5556f_optimized.jpg',
  'photo-1569122243657-3c1c51340f65_optimized.jpg',
  'photo-1568564485646-8387cc48ed0e_optimized.jpg',
  'photo-1567767292278-a4f21aa2d36e_optimized.jpg',
  'photo-1567110823526-8ba395ecd6cc_optimized.jpg',
  'photo-1566683820691-bc408169561f_optimized.jpg',
  'photo-1565538810643-b5bdb714032a_optimized.jpg',
  'photo-1565329921943-7e537b7a2ea9_optimized.jpg',
  'photo-1565231776967-95aee5973585_optimized.jpg',
  'photo-1565183928294-7063f23ce0f8_optimized.jpg',
  'photo-1564540586988-aa4e53c3d799_optimized.jpg',
  'photo-1564540583246-934409427776_optimized.jpg',
  'photo-1563785735387-08e0f873a8a0_optimized.jpg',
  'photo-1563373493-9c50a15c5110_optimized.jpg',
  'photo-1561391922-3c04a61b77d4_optimized.jpg',
  'photo-1561175519-142297b3f44f_optimized.jpg',
  'photo-1561024172-0ae2ebd65018_optimized.jpg',
  'photo-1560747571-e9b3c7e7868c_optimized.jpg',
  'photo-1560598522-75edd73f8473_optimized.jpg',
  'photo-1559599189-fe84dea4eb79_optimized.jpg',
  'photo-1558211583-03ed8a0b3d5f_optimized.jpg',
  'photo-1556912173-3bb406ef7e77_optimized.jpg',
  'photo-1556912167-f556f1f39fdf_optimized.jpg',
  'photo-1556911220-bff31c812dba_optimized.jpg',
  'photo-1556909172-54557c7e4fb7_optimized.jpg',
  'photo-1556597258-dca9fea9489d_optimized.jpg',
  'photo-1556593825-c11de986cb0b_optimized.jpg',
  'photo-1556580004-7eca73f3a3ea_optimized.jpg',
  'photo-1556228149-d8f523f77b5a_optimized.jpg',
  'photo-1556037843-347ddff9f4b0_optimized.jpg',
  'photo-1554485133-5751c0384093_optimized.jpg',
  'photo-1553881651-43348b2ca74e_optimized.jpg',
  'photo-1552858725-2758b5fb1286_optimized.jpg',
  'photo-1552074702-778d9f94af99_optimized.jpg',
  'photo-1551214538-82701c130e1e_optimized.jpg',
  'photo-1550223026-0d6fd780c560_optimized.jpg',
  'photo-1549546020-c6e72b99c8f0_optimized.jpg',
  'photo-1549305769-99383fd4b401_optimized.jpg',
  'photo-1547822281-6e954371f3e1_optimized.jpg',
  'photo-1546807090-d4835dd43a02_optimized.jpg',
  'photo-1546555802-01af0341ec23_optimized.jpg',
  'photo-1545454760-a8e55231441c_optimized.jpg',
  'photo-1544207240-8b1025eb7aeb_optimized.jpg',
  'photo-1543268849-422c6e9251a2_optimized.jpg',
  'photo-1539922980492-38f6673af8dd_optimized.jpg',
  'photo-1538944570562-2c9cb7857097_optimized.jpg',
  'photo-1538944495092-48fff71fbb0c_optimized.jpg',
  'photo-1537726235470-8504e3beef77.jpeg',
  'photo-1533008093099-e2681382639a_optimized.jpg',
  'photo-1532323544230-7191fd51bc1b_optimized.jpg',
  'photo-1531829039722-d3fb3e705a4b_optimized.jpg',
  'photo-1530982937671-bc00141b5d79_optimized.jpg',
  'photo-1527694224012-be005121c774_optimized.jpg',
  'photo-1527359443443-84a48aec73d2_optimized.jpg',
  'photo-1527005980469-e172416c200b_optimized.jpg',
  'photo-1526057565006-20beab8dd2ed_optimized.jpg',
  'photo-1523552550763-26d16de8f011_optimized.jpg',
  'photo-1522708323590-d24dbb6b0267_optimized.jpg',
  'photo-1522444195799-478538b28823_optimized.jpg',
  'photo-1522156373667-4c7234bbd804_optimized.jpg',
  'photo-1521782462922-9318be1cfd04_optimized.jpg',
  'photo-1519710164239-da123dc03ef4_optimized.jpg',
  'photo-1519643225200-94e79e383724_optimized.jpg',
  'photo-1519642918688-7e43b19245d8_optimized.jpg',
  'photo-1517705008128-361805f42e86_optimized.jpg',
  'photo-1517580768147-cb51c6eaa761_optimized.jpg',
  'photo-1517248135467-4c7edcad34c4_optimized.jpg',
  'photo-1516455590571-18256e5bb9ff_optimized.jpg',
  'photo-1516147303597-2445c99ee744_optimized.jpg',
  'photo-1513161455079-7dc1de15ef3e_optimized.jpg',
  'photo-1510266988780-b681a96dca2a_optimized.jpg',
  'photo-1506368249639-73a05d6f6488_optimized.jpg',
  'photo-1505577058444-a3dab90d4253_optimized.jpg',
  'photo-1505576391880-b3f9d713dc4f_optimized.jpg',
  'photo-1505409628601-edc9af17fda6_optimized.jpg',
  'photo-1503174971373-b1f69850bded_optimized.jpg',
  'photo-1502672260266-1c1ef2d93688_optimized.jpg',
  'photo-1502658864988-06735357d7d9_optimized.jpg',
  'photo-1502005097973-6a7082348e28_optimized.jpg',
  'photo-1497366672149-e5e4b4d34eb3_optimized.jpg',
  'photo-1493663284031-b7e3aefcae8e_optimized.jpg',
  'photo-1492097631548-189753426f9c_optimized.jpg',
  'photo-1486946255434-2466348c2166_optimized.jpg',
  'photo-1484154218962-a197022b5858_optimized.jpg',
  'photo-1482350325005-eda5e677279b_optimized.jpg',
  'photo-1481277542470-605612bd2d61_optimized.jpg',
  'photo-1467043153537-a4fba2cd39ef_optimized.jpg',
  'photo-1465353087561-00f737870d62_optimized.jpg',
  'photo-1464316325666-63beaf639dbb_optimized.jpg',
  'photo-1463797221720-6b07e6426c24_optimized.jpg'];

const generateRandomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomImage = () => `https://s3-us-west-1.amazonaws.com/fec.home.images/Optimized/${images[generateRandomNumberBetween(0, images.length)]}`;

const getRandomDescription = () => faker.lorem.sentence();

const getRandomState = () => faker.address.state();

const generateListingIds = () => [...Array(100).keys()];

const getListingName = () => {
  const description = (faker.company.bsAdjective());
  const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
  const name = faker.address.streetName();
  return `${capitalizedDescription} ${name} Home`;
};

const getListingStars = () => (Math.random() * 5).toFixed(2);

const getListingNumReviews = () => Math.floor(Math.random() * 800);

const getListingLocation = () => {
  const county = faker.address.county();
  const state = faker.address.state();
  return `${county}, ${state}, United States`;
};

const getRandomFavorites = () => {
  const favorites = [];
  let numberOfFavorites = generateRandomNumberBetween(3, 8);
  while (numberOfFavorites > 0) {
    favorites.push(generateRandomNumberBetween(0, 100));
    numberOfFavorites -= 1;
  }
  return favorites;
};

const generateSeedData = () => {
  const seedDataObject = [];
  let id = 0;
  // TODO: update this when group agrees upon listing id format
  const listingIds = generateListingIds();
  listingIds.forEach((listingId) => {
    let numPictures = generateRandomNumberBetween(5, 15);
    const listingName = getListingName();
    const listingStars = getListingStars();
    const listingNumReviews = getListingNumReviews();
    const listingLocation = getListingLocation();
    while (numPictures > 0) {
      const listingEntry = {
        id,
        listingId,
        photo: getRandomImage(),
        description: getRandomDescription(),
        listingName,
        listingStars,
        listingNumReviews,
        listingLocation,
      };
      seedDataObject.push(listingEntry);
      id += 1;
      numPictures -= 1;
    }
  });
  return seedDataObject;
};

const users = [1, 2, 3, 4, 5];
const generateFavoriteListings = () => {
  const seedDataFavorites = [];
  users.forEach((user) => {
    const fav1 = getRandomState();
    let fav2 = getRandomState();
    while (fav1 === fav2) {
      fav2 = getRandomState();
    }
    const userFavorites = {
      userId: user,
      listName: fav1,
      favoriteLists: getRandomFavorites(),
      favoritePicture: getRandomImage(),
    };
    const secondFavorite = {
      userId: user,
      listName: fav2,
      favoriteLists: getRandomFavorites(),
      favoritePicture: getRandomImage(),
    };
    seedDataFavorites.push(userFavorites, secondFavorite);
  });
  return seedDataFavorites;
};

module.exports.generateSeedData = generateSeedData;
module.exports.generateFavoriteListings = generateFavoriteListings;

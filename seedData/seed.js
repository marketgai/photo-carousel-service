const faker = require('faker');

const images = [
  'photo-1603825394551-2e7eaace6a2a.jpg',
  'photo-1603568534543-29a3328479f2.jpg',
  'photo-1602071079885-2ea06d63f2d8.jpg',
  'photo-1601883754638-b95a88fac8e1.jpg',
  'photo-1600585152220-90363fe7e115.jpg',
  'photo-1599619351208-3e6c839d6828.jpg',
  'photo-1599421987956-39409b054686.jpg',
  'photo-1599083549548-a307e72433ad.jpg',
  'photo-1598881779612-5892a1da66aa.jpg',
  'photo-1597093373253-00036aaee376.jpg',
  'photo-1595238416701-ea154c5dadd2.jpg',
  'photo-1593853963555-013dbf33c060.jpg',
  'photo-1593226525905-0e11ed887f53.jpg',
  'photo-1592864473192-9b5af0a1b4f8.jpg',
  'photo-1591924450983-b8f7587ea332.jpg',
  'photo-1591434132137-37d04c53197e.jpg',
  'photo-1590415555114-d308bf24212e.jpg',
  'photo-1589824783837-6169889fa20f.jpg',
  'photo-1589554882481-e2a621b0eef3.jpg',
  'photo-1589154587853-da70e391f38a.jpg',
  'photo-1588854337221-4cf9fa96059c.jpg',
  'photo-1588625500633-a0cd518f0f60.jpg',
  'photo-1587023705100-8094f8d47e86.jpg',
  'photo-1586783814585-98fc57facced.jpg',
  'photo-1586023492125-27b2c045efd7.jpg',
  'photo-1585469434395-ac3d72767035.jpg',
  'photo-1585412727254-46e14627b8df.jpg',
  'photo-1584622650111-993a426fbf0a.jpg',
  'photo-1584406445076-88e095f28f4c.jpg',
  'photo-1584276989744-ec20b2017c3b.jpg',
  'photo-1584146812940-359fb518214c.jpg',
  'photo-1583847268964-b28dc8f51f92.jpg',
  'photo-1583135630256-a25ea659d1d7.jpg',
  'photo-1582913130063-8318329a94a3.jpg',
  'photo-1581879608672-f4b28f26c348.jpg',
  'photo-1580077394437-3f4aef8f6450.jpg',
  'photo-1579511038791-539f00d23312.jpg',
  'photo-1578225328621-b5b724300e0c.jpg',
  'photo-1577962224182-d9e092fa4740.jpg',
  'photo-1576698483491-8c43f0862543.jpg',
  'photo-1576009278388-d8cf6bc28e1b.jpg',
  'photo-1575471336446-ff5818dff4f1.jpg',
  'photo-1575413910034-874a7447699f.jpg',
  'photo-1575413905463-3750e44edafe.jpg',
  'photo-1574791627483-7c9fc465eab7.jpg',
  'photo-1574739782594-db4ead022697.jpg',
  'photo-1574643156929-51fa098b0394.jpg',
  'photo-1574598837979-e673fb971687.jpg',
  'photo-1574118140238-fd751a59eabb.jpg',
  'photo-1573255104932-7c6eff00345f.jpg',
  'photo-1573168710865-2e4c680d921a.jpg',
  'photo-1573168710465-7f7da9a23a15.jpg',
  'photo-1573088422077-b6ed78408ff4.jpg',
  'photo-1572891086295-6c1c7c476549.jpg',
  'photo-1572805773780-a02f06ea4798.jpg',
  'photo-1572496973076-dc34056ceb87.jpg',
  'photo-1571843439991-dd2b8e051966.jpg',
  'photo-1571712704100-5cade806bf6d.jpg',
  'photo-1571673638846-2adffccdc689.jpg',
  'photo-1571512051140-becad1ff6a0e.jpg',
  'photo-1570439484439-73079fa1b6b8.jpg',
  'photo-1569377750206-a249f7b5556f.jpg',
  'photo-1569122243657-3c1c51340f65.jpg',
  'photo-1568564485646-8387cc48ed0e.jpg',
  'photo-1567767292278-a4f21aa2d36e.jpg',
  'photo-1567110823526-8ba395ecd6cc.jpg',
  'photo-1566683820691-bc408169561f.jpg',
  'photo-1565538810643-b5bdb714032a.jpg',
  'photo-1565329921943-7e537b7a2ea9.jpg',
  'photo-1565231776967-95aee5973585.jpg',
  'photo-1565183928294-7063f23ce0f8.jpg',
  'photo-1564540586988-aa4e53c3d799.jpg',
  'photo-1564540583246-934409427776.jpg',
  'photo-1563785735387-08e0f873a8a0.jpg',
  'photo-1563373493-9c50a15c5110.jpg',
  'photo-1561391922-3c04a61b77d4.jpg',
  'photo-1561175519-142297b3f44f.jpg',
  'photo-1561024172-0ae2ebd65018.jpg',
  'photo-1560747571-e9b3c7e7868c.jpg',
  'photo-1560598522-75edd73f8473.jpg',
  'photo-1559599189-fe84dea4eb79.jpg',
  'photo-1558211583-03ed8a0b3d5f.jpg',
  'photo-1556912173-3bb406ef7e77.jpg',
  'photo-1556912167-f556f1f39fdf.jpg',
  'photo-1556911220-bff31c812dba.jpg',
  'photo-1556909172-54557c7e4fb7.jpg',
  'photo-1556597258-dca9fea9489d.jpg',
  'photo-1556593825-c11de986cb0b.jpg',
  'photo-1556580004-7eca73f3a3ea.jpg',
  'photo-1556228149-d8f523f77b5a.jpg',
  'photo-1556037843-347ddff9f4b0.jpg',
  'photo-1554485133-5751c0384093.jpg',
  'photo-1553881651-43348b2ca74e.jpg',
  'photo-1552858725-2758b5fb1286.jpg',
  'photo-1552074702-778d9f94af99.jpg',
  'photo-1551214538-82701c130e1e.jpg',
  'photo-1550223026-0d6fd780c560.jpg',
  'photo-1549546020-c6e72b99c8f0.jpg',
  'photo-1549305769-99383fd4b401.jpg',
  'photo-1547822281-6e954371f3e1.jpg',
  'photo-1546807090-d4835dd43a02.jpg',
  'photo-1546555802-01af0341ec23.jpg',
  'photo-1545454760-a8e55231441c.jpg',
  'photo-1544207240-8b1025eb7aeb.jpg',
  'photo-1543268849-422c6e9251a2.jpg',
  'photo-1539922980492-38f6673af8dd.jpg',
  'photo-1538944570562-2c9cb7857097.jpg',
  'photo-1538944495092-48fff71fbb0c.jpg',
  'photo-1537726235470-8504e3beef77.jpeg',
  'photo-1533008093099-e2681382639a.jpg',
  'photo-1532323544230-7191fd51bc1b.jpg',
  'photo-1531829039722-d3fb3e705a4b.jpg',
  'photo-1530982937671-bc00141b5d79.jpg',
  'photo-1527694224012-be005121c774.jpg',
  'photo-1527359443443-84a48aec73d2.jpg',
  'photo-1527005980469-e172416c200b.jpg',
  'photo-1526057565006-20beab8dd2ed.jpg',
  'photo-1523552550763-26d16de8f011.jpg',
  'photo-1522708323590-d24dbb6b0267.jpg',
  'photo-1522444195799-478538b28823.jpg',
  'photo-1522156373667-4c7234bbd804.jpg',
  'photo-1521782462922-9318be1cfd04.jpg',
  'photo-1519710164239-da123dc03ef4.jpg',
  'photo-1519643225200-94e79e383724.jpg',
  'photo-1519642918688-7e43b19245d8.jpg',
  'photo-1517705008128-361805f42e86.jpg',
  'photo-1517580768147-cb51c6eaa761.jpg',
  'photo-1517248135467-4c7edcad34c4.jpg',
  'photo-1516455590571-18256e5bb9ff.jpg',
  'photo-1516147303597-2445c99ee744.jpg',
  'photo-1513161455079-7dc1de15ef3e.jpg',
  'photo-1510266988780-b681a96dca2a.jpg',
  'photo-1506368249639-73a05d6f6488.jpg',
  'photo-1505577058444-a3dab90d4253.jpg',
  'photo-1505576391880-b3f9d713dc4f.jpg',
  'photo-1505409628601-edc9af17fda6.jpg',
  'photo-1503174971373-b1f69850bded.jpg',
  'photo-1502672260266-1c1ef2d93688.jpg',
  'photo-1502658864988-06735357d7d9.jpg',
  'photo-1502005097973-6a7082348e28.jpg',
  'photo-1497366672149-e5e4b4d34eb3.jpg',
  'photo-1493663284031-b7e3aefcae8e.jpg',
  'photo-1492097631548-189753426f9c.jpg',
  'photo-1486946255434-2466348c2166.jpg',
  'photo-1484154218962-a197022b5858.jpg',
  'photo-1482350325005-eda5e677279b.jpg',
  'photo-1481277542470-605612bd2d61.jpg',
  'photo-1467043153537-a4fba2cd39ef.jpg',
  'photo-1465353087561-00f737870d62.jpg',
  'photo-1464316325666-63beaf639dbb.jpg',
  'photo-1463797221720-6b07e6426c24.jpg'];

const generateRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomImage = () => {
  return 'https://s3-us-west-1.amazonaws.com/fec.home.images/' + images[generateRandomNumberBetween(0, images.length)];
};

const getRandomDescription = () => {
  return faker.lorem.sentence();
};

const generateListingIds = () => {
  return [...Array(100).keys()];
};

const generateSeedData = () => {
  const seedDataObject = [];
  let id = 0;
  const listingIds = generateListingIds(); //TODO: update this when group agrees upon listing id format
  listingIds.forEach((listingId) => {
    let numPictures = generateRandomNumberBetween(5, 15);
    while (numPictures > 0) {
      let listingEntry = {
        id: id,
        listingId: listingId,
        photo: getRandomImage(), // TODO: Add a method to prevent getting duplicate images into the same listing
        description: getRandomDescription()
      };
      seedDataObject.push(listingEntry);
      id++;
      numPictures--;
    }
  });
  return seedDataObject;
};

module.exports = generateSeedData;
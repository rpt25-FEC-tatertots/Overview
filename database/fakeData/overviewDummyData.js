const faker = require('faker');

//generate 100 record for overview table

//add all 100 to database

/*
oneRecord = {
  product_id: NUMBER,
  product_description: STRING,
  feature1_title: STRING,
  feature1_description: STRING,
  feature2_title: STRING,
  feature2_description: STRING,
  feature3_title: STRING,
  feature3_description: STRING,
  feature4_title: STRING,
  feature4_description: STRING,
  feature5_title: STRING,
  feature5_description: STRING,
  feature6_title: STRING,
  feature6_description: STRING,
  weight: STRING
}
*/

const randomNumberGenerator = (num) => {
  return faker.random.number(num);
}

const generateOneRecord = () => {
  const oneRecord = {
    product_description:  faker.lorem.sentence(randomNumberGenerator(35)),
    feature1_title:       faker.lorem.word(),
    feature1_description: faker.lorem.words(randomNumberGenerator(15)),
    feature2_title:       faker.lorem.word(),
    feature2_description: faker.lorem.words(randomNumberGenerator(10)),
    feature3_title:       faker.lorem.word(),
    feature3_description: faker.lorem.words(randomNumberGenerator(7)),
    feature4_title:       faker.lorem.word(),
    feature4_description: faker.lorem.words(randomNumberGenerator(15)),
    feature5_title:       faker.lorem.word(),
    feature5_description: faker.lorem.words(randomNumberGenerator(10)),
    feature6_title:       faker.lorem.word(),
    feature6_description: faker.lorem.words(randomNumberGenerator(15)),
    weight:               faker.random.number(100).toString()
  };

  return oneRecord;
};

const generatePartialRecord = () => {
  const partialRecord = {
    product_description:  faker.lorem.sentence(randomNumberGenerator(35)),
    feature1_title:       faker.lorem.word(),
    feature1_description: faker.lorem.words(randomNumberGenerator(15)),
    feature2_title:       faker.lorem.word(),
    feature2_description: faker.lorem.words(randomNumberGenerator(10)),
    feature3_title:       faker.lorem.word(),
    feature3_description: faker.lorem.words(randomNumberGenerator(7)),
    feature4_title:       null,
    feature4_description: null,
    feature5_title:       null,
    feature5_description: null,
    feature6_title:       null,
    feature6_description: null,
    weight:               faker.random.number(100).toString()
  }
  return partialRecord;
};

// //generate five records to make sure this works
// const fiveRecords = [];

// for(i = 0; i < 6; i++) {
//   if(i % 2 === 0) {
//     fiveRecords.push(generateOneRecord());
//   } else {
//     fiveRecords.push(generatePartialRecord());
//   }
// };

// console.log(fiveRecords);

module.exports = {generateOneRecord, generatePartialRecord};
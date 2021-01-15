const faker = require('faker');


//random number generator function generates a random number between 0 and 'num'
const randomNumberGenerator = (num) => {
  return faker.random.number(num);
}

//generates one complete record
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

//generates one partial record
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


module.exports = {generateOneRecord, generatePartialRecord, randomNumberGenerator};
'use strict';

const fs = require(`fs`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const writeJSONFile = (fileName, content) => {
  try {
    const data = JSON.stringify(content);
    fs.writeFileSync(fileName, data);
    console.info(`Operation success. File created.`);
  } catch (err) {
    console.error(`Error occurred: ${err}`);
  }
};

module.exports = {
  getRandomInt,
  shuffle,
  writeJSONFile,
};


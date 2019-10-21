const eqArrays = require("./eqArrays");

const assertArrayEqual = (arrayOne, arrayTwo) => {
  eqArrays(arrayOne, arrayTwo)
    ? console.log(`Matched: ${arrayOne} === ${arrayTwo}`)
    : console.log(`Not Matched: ${arrayOne} !== ${arrayTwo}`);
};

module.exports = assertArrayEqual;
const eqArrays = require("./eqArrays");

const assertArrayEqual = (arrayOne, arrayTwo) => {
  eqArrays(arrayOne, arrayTwo)
<<<<<<< HEAD
    ? console.log(chalk.green(`Assertion Passed: ${arrayOne} === ${arrayTwo}`))
    : console.log(chalk.green(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`));
=======
    ? console.log(`Matched: ${arrayOne} === ${arrayTwo}`)
    : console.log(`Not Matched: ${arrayOne} !== ${arrayTwo}`);
>>>>>>> 031ec17b631102a1d10024e0f0dd86cf6e855106
};

module.exports = assertArrayEqual;
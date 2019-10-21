const eqArrays = require("./eqArrays");
const chalk = require("chalk");

const assertArrayEqual = (arrayOne, arrayTwo) => {
  eqArrays(arrayOne, arrayTwo)
    ? console.log(chalk.green(`Assertion Passed: ${arrayOne} === ${arrayTwo}`))
    : console.log(chalk.green(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`));
};

module.exports = assertArrayEqual;
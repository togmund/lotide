const chalk = require("chalk");

const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(chalk.green(`Assertion Passed: ${actual} === ${expected}`))
    : console.log(chalk.red(`Assertion Failed: ${actual} !== ${expected}`));
};

module.exports = assertEqual;

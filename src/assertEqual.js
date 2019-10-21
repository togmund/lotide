const chalk = require("chalk");

const assertEqual = function(actual, expected) {
  actual === expected
<<<<<<< HEAD
    ? console.log(chalk.green(`Assertion Passed: ${actual} === ${expected}`))
    : console.log(chalk.green(`Assertion Failed: ${actual} !== ${expected}`));
=======
    ? console.log(`Matched: ${actual} === ${expected}`)
    : console.log(`Not Matched: ${actual} !== ${expected}`);
>>>>>>> 031ec17b631102a1d10024e0f0dd86cf6e855106
};

module.exports = assertEqual;

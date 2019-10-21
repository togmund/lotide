const chalk = require("chalk");

const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`Matched: ${actual} === ${expected}`)
    : console.log(`Not Matched: ${actual} !== ${expected}`);
};

module.exports = assertEqual;

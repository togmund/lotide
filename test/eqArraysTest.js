const eqArrays = require("../src/eqArrays");
const assertEqual = require("../src/assertEqual");

// TEST CODE

describe("eqArrays", () => {
  it("", () => {
    assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
    assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
    assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => true
    assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
  });
});

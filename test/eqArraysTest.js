const eqArrays = require("../src/eqArrays");
const assert = require("chai").assert;

// TEST CODE

describe("eqArrays", () => {
  it("should take in two arrays of numbers and return true based on a perfect match", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should take in two arrays of strings and return true based on a perfect match", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
  });
  it("should take in two arrays that are not perfectly equal and return false", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false); 
  });
});

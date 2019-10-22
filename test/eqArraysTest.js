const _ = require("../src/index");
const assert = require("chai").assert;

// TEST CODE

describe("EqArraysTest", () => {
  it("should take in two arrays of numbers and return true based on a perfect match", () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should take in two arrays of strings and return true based on a perfect match", () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("should take in two arrays that are not perfectly equal and return false", () => {
    assert.strictEqual(_.eqArrays(["1", "2", "3"], [1, 2, 3]), false);
  });
});

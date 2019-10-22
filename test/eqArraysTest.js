const eqArrays = require("../src/eqArrays");
const assert = require("chai").assert;

// TEST CODE

describe("eqArrays", () => {
  it("", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
  });
});

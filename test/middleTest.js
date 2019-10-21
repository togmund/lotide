const middle = require("../src/middle");
const assert = require("chai").assert;

// Tests

describe("middleEqualTest", () => {
  it("should return no value when the length of the array is fewer than three", () => {
    assert.deepEqual(middle([0, 78567]), []); // => true
  });
  it("should return the middle value when the length of the array is odd", () => {
    assert.deepEqual(middle([0, 2, 6, 8, 10]), [6]); // => true
  });
  it("should return the average of the middle two values when the array length is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => true
  });
});


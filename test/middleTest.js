const _ = require("../src/index");
const assert = require("chai").assert;

// Tests

describe("middleEqualTest", () => {
  it("should return no value when the length of the array is fewer than three", () => {
    assert.deepEqual(_.middle([0, 78567]), []); // => true
  });
  it("should return the middle value when the length of the array is odd", () => {
    assert.deepEqual(_.middle([0, 2, 6, 8, 10]), [6]); // => true
  });
  it("should return the average of the middle two values when the array length is even", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => true
  });
});

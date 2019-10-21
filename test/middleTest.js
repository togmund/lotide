const middle = require("../src/middle");
const assertArraysEqual = require("../src/assertArraysEqual");

// Tests

describe("middleEqualTest", () => {
  it("should return no value when the length of the array is fewer than three", () => {
    assertArraysEqual(middle([0, 78567]), []); // => false
  });
  it("should return the middle value when the length of the array is odd", () => {
    assertArraysEqual(middle([0, 2, 6, 8, 10]), [6]); // => true
  });
  it("should return the average of the middle two values when the array length is even", () => {
    assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => true
  });
});


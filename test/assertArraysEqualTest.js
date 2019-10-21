const assertArrayEqual = require("../src/assertArraysEqual");

describe("assertArraysEqualTest", () => {
  it("should return true when the arrays are equal", () => {
    assertArrayEqual([1, 2, 3], [1, 2, 3]);
  });
  it("should return false when the arrays are not equal", () => {
    assertArrayEqual([1, 2, 3], [1, 4, 3]);
  });
  it("should return false when the arrays are of different lengths", () => {
    assertArrayEqual([1, 2, 3], [1, 2, 3, 4, 5]);
  });
});

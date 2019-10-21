const assertArrayEqual = require("../src/assertArraysEqual");

describe("assertArraysEqualTest", () => {
  it("", () => {
    assertArrayEqual([1, 2, 3], [1, 2, 3]);
    assertArrayEqual([1, 2, 3], [1, 4, 3]);
    assertArrayEqual([1, 2, 3], [1, 2, 3, 4, 5]);
  });
});

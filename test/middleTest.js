const middle = require("../src/middle");
const assertArraysEqual = require("../src/assertArraysEqual");

// Tests

describe("middleEqualTest", () => {
  it("", () => {
    assertArraysEqual(middle([0, 2, 6, 8, 10]), [6]); // => true
    assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => true
    assertArraysEqual(middle([0, 78567]), []); // => true
  });
});


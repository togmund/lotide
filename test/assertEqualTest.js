const assertEqual = require("../src/assertEqual");

// Test code

describe("AssertEqualTest", () => {
  it("should return 'not matched' when two words are not equal", () => {
    assertEqual("Lighthouse Labs", "Bootcamp");
  });
  it("should return 'matched' when two words are equal", () => {
    assertEqual(1, 1);
  });
});

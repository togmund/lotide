const assertEqual = require("../src/assertEqual");

// Test code

describe("AssertEqual", () => {
  it("", function () {
    assertEqual("Lighthouse Labs", "Bootcamp");
    assertEqual(1, 1);
    assertEqual(1, "1");
    assertEqual(true, false);
    assertEqual(1 + 1, 2);
  })
});
const chai = require("chai");
const head = require("../src/head");
const assertEqual = require("../src/assertEqual");

// # Tests

describe("HeadTest", () => {
  it("", function () {
    assertEqual(head([5, 6, 7]), 5);                                // Should return True
    assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");  // Should return True
    assertEqual(head("seven"), "seven");                           // Should return FALSE
    assertEqual(head([]), "seven");
  })
});

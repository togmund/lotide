const head = require("../src/head");
const assert = require("chai").assert;

// # Tests

describe("HeadTest", () => {
  it("should return the number that is at the start of an array", () => {
    assert.strictEqual(head([5, 6, 7]), 5); // Should return True
  });

  it("should return the string that is at the start of an array", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Should return True
  });

  it("should return the first character of a string", () => {
    assert.strictEqual(head("seven"), "s"); // Should return FALSE
  });

  it("should return undefined", () => {
    assert.strictEqual(head([]), undefined);
  });
});

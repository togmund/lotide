const _ = require("../src/index");
const assert = require("chai").assert;

// Tests
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = _.count(firstNames, {
  Karima: true,
  Fang: true
});

describe("countTest", () => {
  it("should return the amount of occurrences of a value in an object", () => {
    assert.deepEqual(result1["Fang"], 2); // => true
  });
  it("should return undefined where a value does not appear in an object", () => {
    assert.deepEqual(result1["Karima"], undefined); // => true
  });
});

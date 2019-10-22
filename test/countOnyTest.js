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
  Jason: true,
  Karima: true,
  Fang: true
});

describe("countTest", () => {
  it("should return ", () => {
    assert.deepEqual(result1["Jason"], 1); // => true
  });
  it("should return ", () => {
    assert.deepEqual(result1["Karima"], undefined); // => true
  });
  it("should return ", () => {
    assert.deepEqual(result1["Fang"], 2); // => true
  });
});

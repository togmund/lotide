const _ = require("../src/index");
const assert = require("chai").assert;

describe("FindKeyTest", () => {
  it("should return the corresponding key of a value in an object", () => {
    assert.deepEqual(_.findKey(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("should return 'undefined' when shown a value that doesn't exist in an object", () => {
    assert.deepEqual(
      _.findKey(bestTVShowsByGenre, "That '70s Show"),
      undefined
    );
  });
});

// // TESTS
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

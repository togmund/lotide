const _ = require("../src/index");
const assert = require("chai").assert;

// TEST CODE

describe("EqObjectsTest", () => {
  // it("should take in two objects of numbers with identical key-value pairs that are reordered and return true based on a match of the same numbers", () => {
  //   assert.deepEqual(
  //     _.eqObjects({ a: ["1"], b: "2" }, { b: "2", a: ["1"] }),
  //     true
  //   );
  // });
  it("should take in two objects of strings and return true based on a perfect match", () => {
    assert.deepEqual(
      _.eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }),
      false
    );
  });
  it("should take in two objects that are not perfectly equal and return false", () => {
    assert.deepEqual(
      _.eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }),
      true
    );
  });

  // it("should take in two objects that are not perfectly equal and return false", () => {
  //   assert.deepEqual(
  //     _.eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }),
  //     false
  //   );
  // });
});

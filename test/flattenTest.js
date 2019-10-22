const _ = require("../src/index");
const assert = require("chai").assert;

// Test Case 1: Check the returned array elements
describe("FlattenTest", () => {
  it("should return nested array elements in a single array", () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); 
  });
  it("should return more than one layer of nested array elements in a single array", () => {
    assert.deepEqual(_.flatten([1, 2, [[3, 4], 5, [6]]]), [1, 2, 3, 4, 5, 6]);
  });
});
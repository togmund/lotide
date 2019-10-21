const tail = require("../src/tail");
const assert = require("chai").assert;

// Test Case 1: Check the returned array elements
describe("TailTest", () => {
  it("should return all the elements in the array except the first element", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]); // Should return TRUE
  });

  it("should return an empty array when there is only one item in the array", () => {
    assert.deepEqual(tail(["Hello"]), []); // Should return FALSE
  });

  it("should return an empty array when there is nothing in the array", () => {
    assert.deepEqual(tail([]), []); // Should return FALSE
  });
});

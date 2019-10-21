const tail = require("../src/tail");
// const assertEqual = require("../src/assertEqual");
// const result = tail(["Hello", "Lighthouse", "Labs"]);
const assertDeepEqual = require("chai").assert;

// Test Case 1: Check the returned array elements
describe("TailTest", () => {
  it("should return all the elements in the array except the first element", () => {
    assertDeepEqual(tail([5, 6, 7]), [6, 7]); // Should return TRUE
  });

  it("should return undefined when there is only one item in the array", () => {
    assertDeepEqual(tail(["Hello"]), undefined); // Should return FALSE
  });

  it("should return undefined when there is nothing in the array", () => {
    assertDeepEqual(tail([]), undefined); // Should return FALSE
  });
});

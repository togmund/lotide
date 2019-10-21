const tail = require("../src/tail");
const assertEqual = require("../src/assertEqual");

// Test Case 1: Check the returned array elements
describe("TailTest", () => {
  it("", function() {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assertEqual(result.length, 2); // ensure we get back two elements
    assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
    assertEqual(result[1], "Labs"); // ensure second element is "Labs"
  });
});


// Actual Function
// middle FUNCTION IMPLEMENTATION
const middle = function (argArray) {
  if (argArray.length < 3) {
    return argArray.slice(0, 0);
  }
  if (argArray.length % 2 !== 0) {
    return argArray.slice(
      (argArray.length / 2) - 0.5,
      (argArray.length / 2) - 0.5 + 1);
  }
  if (argArray.length % 2 === 0) {
    return argArray.slice(
      argArray.length / 2 - 1,
      argArray.length / 2 + 1
    );
  }
};
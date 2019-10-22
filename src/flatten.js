// FUNCTION IMPLEMENTATION

const flatten = (argument) => {
  let input = argument;
  let tempArgument = [];
  input.map(function(inputElement) {
    if (Array.isArray(inputElement)) {
      inputElement.forEach(nestedElement => {
        tempArgument.push(nestedElement);
      });
    } else {
      tempArgument.push(inputElement);
      return inputElement;
    }
  });
  return tempArgument;
};

module.exports = flatten;
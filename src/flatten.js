// FUNCTION IMPLEMENTATION

function flatten(array) {
  return array.reduce(
    function flat(nestedArray, nestedElement) {
      return ( Array.isArray(nestedElement)
      && nestedElement.reduce(flat, nestedArray))
      || nestedArray.concat(nestedElement);},
      []);
}

module.exports = flatten;

const eqArrays = require("./eqArrays");
const eqObjects = (objectOne, objectTwo) => {
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) {
    return false;
  }
  for (let key in objectOne) {
    if (Array.isArray(objectOne[key]) && Array.isArray(objectTwo[key])) {
      if (eqArrays(objectOne[key], objectTwo[key]) === false) {
        return false;
      }
    } else {
      if (objectOne[key] !== objectTwo[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

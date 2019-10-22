const findKeyByValue = function(object, value) {
  for (let obj in object) {
    if (object[obj] === value) {
      return obj;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

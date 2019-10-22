
// FUNCTION IMPLEMENTATION
const letterPosition =  (stringToCount) => {
  const results = {};
  for (let i = 0; i < stringToCount.length; i++) {
    if (results[stringToCount[i]]) {
      results[stringToCount[i]].push(i);
    } else {
      results[stringToCount[i]] = [i];
    }
  }
  delete results[' '];
  return results;
}

module.exports = letterPosition;

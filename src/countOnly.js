// allItems: an array of strings that we need to look through.
// itemsToCount: an object specifying what to count.
const countOnly = (arrayItems, itemsToCount) => {
  const results = {};
  for (const item of arrayItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;

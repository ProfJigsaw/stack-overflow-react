/**
 * Function to return the most occuring
 * item from an array of items
 * @param {array} arr
 * @returns {number} mode value
 */
const mode = (arr) => {
  return arr.reduce((current, item) => {
    current.numMapping[item] = (current.numMapping[item] || 0) + 1;
    const val = current.numMapping[item];
    if (val > current.greatestFreq) {
      current.greatestFreq = val;
      current.mode = item;
    }
    return current;
  }, { mode: null, greatestFreq: -Infinity, numMapping: {} }).mode;
};

export default mode;

// 8-clean_set.js

/**
 * Returns a string of all the set values that start with a specific string.
 * @param {Set} set The Set to clean
 * @param {String} startString The string to check for at the beginning of values
 * @returns {String} String containing all values of the set that start with startString,
 * separated by '-'
 */
function cleanSet(set, startString) {
  let result = '';
  // If startString is empty, return an empty string
  if (startString === '') {
    return result;
  }
  // Iterate over the set
  for (const value of set) {
    // Check if the value starts with startString
    if (value.startsWith(startString)) {
      // Append the rest of the value to the result string
      result += `${value.substring(startString.length)}-`;
    }
  }
  // Remove the trailing '-' if any
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }
  return result;
}

export default cleanSet;

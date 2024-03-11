// 7-has_array_values.js

/**
 * Checks if all elements in the array exist within the set.
 * @param {Set} set The Set to check against
 * @param {Array} array The array of elements to check
 * @returns {Boolean} True if all elements in the array exist within the set, false otherwise
 */
function hasValuesFromArray(set, array) {
  // Iterate over the array
  for (const value of array) {
    // Check if the value exists in the set
    if (!set.has(value)) {
      return false; // If not found, return false
    }
  }
  // If all elements are found, return true
  return true;
}

export default hasValuesFromArray;

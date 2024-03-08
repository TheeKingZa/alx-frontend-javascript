// Define a function called appendToEachArrayValue using ES6's for...of loop
export default function appendToEachArrayValue(array, appendString) {
  // Iterate over each element of the array using the for...of loop
  for (let value of array) {
    // Append the appendString to each value in the array
    value = appendString + value;
  }

  return array;
}

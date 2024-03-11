// Define a function called concatArrays using spread syntax
export default function concatArrays(array1, array2, string) {
  // Concatenate array1, array2, and the characters of the string using spread syntax
  return [...array1, ...array2, ...string];
}

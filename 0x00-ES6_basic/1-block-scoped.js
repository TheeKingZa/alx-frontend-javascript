// Define a function called taskBlock
export default function taskBlock(trueOrFalse) {
  // Initialize the result array
  let result = [false, true];

  // Check if trueOrFalse is true
  if (trueOrFalse) {
    // Update the result array if trueOrFalse is true
    result = [false, false];
  }

  // Return the result array
  return result;
}

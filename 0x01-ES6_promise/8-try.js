export default function divideFunction(numerator, denominator) {
  // Check if denominator is 0
  if (denominator === 0) {
    // Throw an error if denominator is 0
    throw new Error('cannot divide by 0');
  } else {
    // Return the result of division if denominator is not 0
    return numerator / denominator;
  }
}

export default function iterateThroughObject(reportWithIterator) {
  let result = ''; // Initialize an empty string to store the concatenated names
  
  // Iterate over the iterator object
  for (const employee of reportWithIterator) {
    // Concatenate the employee name with the separator
    result += employee + ' | ';
  }
  
  // Remove the trailing separator and return the result
  return result.slice(0, -3);
}

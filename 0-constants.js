// Function to return a string preference using const
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Function to return a string suffix
export function getLast() {
  return ' is okay';
}

// Function to concatenate strings and return the result
export function taskNext() {
  // Variable combination declared using let since it will be modified
  let combination = 'But sometimes let';
  // Append the result of the getLast function to combination
  combination += getLast();

  return combination;
}

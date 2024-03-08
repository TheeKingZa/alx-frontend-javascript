export default function taskBlock(trueOrFalse) {
  let task = false;
  // Use let instead of var
  let task2 = true;
  // Use let instead of var

  if (trueOrFalse) {
    task = true;
    // Assign the value directly without redeclaring
    task2 = false;
    // Assign the value directly without redeclaring
  }

  return [task, task2];
}

// Define a function named createIteratorObject that takes a report object as input
export default function createIteratorObject(report) {
  // Initialize an empty array to store employee data
  const employees = [];

  // Iterate over each employee object in the report using Object.values()
  for (const employee of Object.values(report)) {
    // Iterate over each property in the current employee object using for-in loop
    for (const prop in employee) {
      // Check if the property belongs directly to the object using hasOwnProperty
      if (Object.prototype.hasOwnProperty.call(employee, prop)) {
        // If the property is owned by the object, push its value to the employees array
        employees.push(employee[prop]);
      }
    }
  }

  // Return the array containing employee data
  return employees;
}

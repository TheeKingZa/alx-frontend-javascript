// Define a function called createEmployeesObject
export default function createEmployeesObject(departmentName, employees) {
  // Return an object with the specified format
  return {
    [departmentName]: employees,
  };
}

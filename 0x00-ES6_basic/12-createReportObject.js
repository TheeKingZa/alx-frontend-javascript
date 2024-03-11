// Define a function called createReportObject
export default function createReportObject(employeesList) {
  // Define the allEmployees object using spread syntax to merge the employee lists
  const allEmployees = {
    ...employeesList,
  };

  // Define the getNumberOfDepartments method property using ES6 method property syntax
  const getNumberOfDepartments = (allEmployees) => Object.keys(allEmployees).length;

  // Return an object containing allEmployees and the getNumberOfDepartments method
  return {
    allEmployees,
    getNumberOfDepartments,
  };
}

export default function* createIteratorObject(report) {
  // Iterate over each department in the report object
  for (const department in report.allEmployees) {
    const employees = report.allEmployees[department];
    // Iterate over each employee in the department
    for (const employee of employees) {
      yield employee; // Yield each employee
    }
  }
}

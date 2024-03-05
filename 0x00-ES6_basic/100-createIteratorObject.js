export default function* createIteratorObject(report) {
    // Iterate over each department in the report
    for (const department in report.allEmployees) {
      // Iterate over each employee in the current department
      for (const employee of report.allEmployees[department]) {
        // Yield the employee name
        yield employee;
      }
    }
  }
  
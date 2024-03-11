// 1-get_list_student_ids.test.js

// Import the function to test
import getListStudentIds from './1-get_list_student_ids';
// Import the function used to generate the list of students
import getListStudents from './0-get_list_students';

// Describe block to group related tests
describe('getListStudentIds', () => {
  expect.hasAssertions(); // Add expect.hasAssertions() here to ensure each test has assertions

  // Test case: should return an empty array if argument is not an array
  it('should return an empty array if argument is not an array', () => {
    // Call the function with a non-array argument
    const result = getListStudentIds('hello');
    // Assert that the result is an empty array
    expect(result).toStrictEqual([]);
  });

  // Test case: should return an array of student ids
  it('should return an array of student ids', () => {
    expect.hasAssertions(); // Add expect.hasAssertions() here to ensure each test has assertions
    // Generate a list of students using the function from the previous task
    const students = getListStudents();
    // Define the expected array of student ids
    const expectedIds = [1, 2, 5];
    // Call the function with the list of students
    const result = getListStudentIds(students);
    // Assert that the result matches the expected array of student ids
    expect(result).toStrictEqual(expectedIds);
  });
});

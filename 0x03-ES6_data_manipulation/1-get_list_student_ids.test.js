// 1-get_list_student_ids.test.js

import getListStudentIds from './1-get_list_student_ids';
import getListStudents from './0-get_list_students';

describe('getListStudentIds', () => {
  expect.hasAssertions(); // Add expect.hasAssertions() here to ensure each test has assertions

  it('should return an empty array if argument is not an array', () => {
    const result = getListStudentIds('hello');
    expect(result).toStrictEqual([]);
  });

  it('should return an array of student ids', () => {
    expect.hasAssertions(); // Add expect.hasAssertions() here to ensure each test has assertions
    const students = getListStudents();
    const expectedIds = [1, 2, 5];
    const result = getListStudentIds(students);
    expect(result).toStrictEqual(expectedIds);
  });
});

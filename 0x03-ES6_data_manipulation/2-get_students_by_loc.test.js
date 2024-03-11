// 2-get_students_by_loc.test.js

import getStudentsByLocation from './2-get_students_by_loc';
import getListStudents from './0-get_list_students';

describe('getStudentsByLocation', () => {
  expect.hasAssertions(); // Add expect.hasAssertions() here to ensure each test has assertions

  it('should return an empty array if no students are located in the specified city', () => {
    const students = getListStudents();
    const result = getStudentsByLocation(students, 'Nowhere');
    expect(result).toStrictEqual([]);
  });

  it('should return an array of students located in the specified city', () => {
    expect.hasAssertions(); // Add expect.hasAssertions() here to ensure each test has assertions
    const students = getListStudents();
    const result = getStudentsByLocation(students, 'San Francisco');
    const expected = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ];
    expect(result).toStrictEqual(expected);
  });
});

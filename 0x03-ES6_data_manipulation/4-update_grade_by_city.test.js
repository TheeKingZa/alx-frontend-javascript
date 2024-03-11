// 4-update_grade_by_city.test.js
/* eslint-disable jest/prefer-expect-assertions */

import updateStudentGradeByCity from './4-update_grade_by_city';
import getListStudents from './0-get_list_students';

describe('updateStudentGradeByCity', () => {
  it('should update grades for students in the specified city', () => {
    const students = getListStudents();
    const newGrades = [
      { studentId: 5, grade: 97 },
      { studentId: 1, grade: 86 },
    ];
    const result = updateStudentGradeByCity(students, 'San Francisco', newGrades);
    const expected = [
      {
        id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86,
      },
      {
        id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97,
      },
    ];
    expect(result).toStrictEqual(expected);
  });

  it('should set grade to N/A if no grade is provided for a student', () => {
    const students = getListStudents();
    const newGrades = [{ studentId: 5, grade: 97 }];
    const result = updateStudentGradeByCity(students, 'San Francisco', newGrades);
    const expected = [
      {
        id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'N/A',
      },
      {
        id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97,
      },
    ];
    expect(result).toStrictEqual(expected);
  });
});

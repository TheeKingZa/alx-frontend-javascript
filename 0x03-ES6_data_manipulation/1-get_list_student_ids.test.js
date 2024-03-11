// 1-get_list_student_ids.test.js
/* eslint-disable jest/prefer-expect-assertions */

import getListStudentIds from './1-get_list_student_ids';
import getListStudents from './0-get_list_students';

describe('getListStudentIds', () => {
  it('should return an empty array if argument is not an array', () => {
    const result = getListStudentIds('hello');
    expect(result).toStrictEqual([]);
  });

  it('should return an array of student ids', () => {
    const students = getListStudents();
    const expectedIds = [1, 2, 5];
    const result = getListStudentIds(students);
    expect(result).toStrictEqual(expectedIds);
  });
});

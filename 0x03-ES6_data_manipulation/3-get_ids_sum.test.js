// 3-get_ids_sum.test.js
/* eslint-disable jest/prefer-expect-assertions */

import getStudentIdsSum from './3-get_ids_sum';
import getListStudents from './0-get_list_students';

describe('getStudentIdsSum', () => {
  it('should return 0 if the list of students is empty', () => {
    const result = getStudentIdsSum([]);
    expect(result).toBe(0);
  });

  it('should return the sum of all student ids', () => {
    const students = getListStudents();
    const result = getStudentIdsSum(students);
    expect(result).toBe(8); // The sum of [1, 2, 5] is 8
  });
});

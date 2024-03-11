// 0-get_list_students.test.js

import getListStudents from './0-get_list_students';

describe('getListStudents', () => {
  it('should return an array of student objects', () => {
    expect.hasAssertions();
    const students = getListStudents();
    expect(Array.isArray(students)).toBe(true); // Check if the result is an array
    students.forEach((student) => {
      // Check if each student object has the required attributes
      expect(student).toHaveProperty('id');
      expect(student).toHaveProperty('firstName');
      expect(student).toHaveProperty('location');
    });
  });

  it('should contain the correct student data', () => {
    expect.hasAssertions();
    const students = getListStudents();
    // Check if the array contains the correct student data in the correct order
    expect(students).toStrictEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ]);
  });
});

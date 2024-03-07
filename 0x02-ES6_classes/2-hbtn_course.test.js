const HolbertonCourse = require('./2-hbtn_course');

describe('holbertonCourse', () => {
  it('valid inputs', () => {
    expect.assertions(5);
    const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(c1.name).toBe('ES6');
    expect(c1.toHavelength).toBe(1);
    expect(c1.students).toHaveLength(2).toEqual(['Bob', 'Jane']);

    c1.name = 'Python 101';
    expect(c1.name).toBe('Python 101');

    c1.toHavelength = 2;
    expect(c1.toHavelength).toBe(2);

    c1.students = ['Alice', 'John'];
    expect(c1.students).toHaveLength(2).toEqual(['Alice', 'John']);
  });

  it('invalid inputs', () => {
    expect.assertions(3);
    const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);

    // Attempt to set name to a non-string value
    expect(() => { c1.name = 12; }).toThrow('Name must be a string');

    // Attempt to set length to a non-number value
    expect(() => { c1.toHavelength = '2'; }).toThrow('Length must be a number');

    // Attempt to set students to a non-array value
    expect(() => { c1.students = 'Alice, John'; }).toThrow('Students must be an array of strings');
  });
});

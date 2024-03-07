const HolbertonCourse = require('./2-hbtn_course');

// Test cases
test('Test valid inputs', () => {
  const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
  expect(c1.name).toBe('ES6');
  expect(c1.length).toBe(1);
  expect(c1.students).toEqual(['Bob', 'Jane']);

  c1.name = 'Python 101';
  expect(c1.name).toBe('Python 101');

  c1.length = 2;
  expect(c1.length).toBe(2);

  c1.students = ['Alice', 'John'];
  expect(c1.students).toEqual(['Alice', 'John']);
});

test('Test invalid inputs', () => {
  const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);

  // Attempt to set name to a non-string value
  expect(() => { c1.name = 12 }).toThrow('Name must be a string');

  // Attempt to set length to a non-number value
  expect(() => { c1.length = '2' }).toThrow('Length must be a number');

  // Attempt to set students to a non-array value
  expect(() => { c1.students = 'Alice, John' }).toThrow('Students must be an array of strings');
});

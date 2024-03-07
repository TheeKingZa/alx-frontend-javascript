import HolbertonCourse from './2-hbtn_course';

// Test suite for the HolbertonCourse class
describe('holbertonCourse', () => {
  // Test case for the constructor
  it('should create a HolbertonCourse object with the specified attributes', () => {
    // Expect assertions to be called in this test case
    expect.assertions(3);

    // Create a new HolbertonCourse object
    const course = new HolbertonCourse('ES6', 8, ['Bob', 'Jane']);

    // Verify that the object is an instance of HolbertonCourse
    expect(course).toBeInstanceOf(HolbertonCourse);

    // Verify that the attributes are correctly initialized
    expect(course.name).toBe('ES6');
    expect(course.students).toStrictEqual(['Bob', 'Jane']);
  });

  // Test cases for getters and setters
  it('should get and set the name attribute', () => {
  // Expect assertions to be called in this test case
    expect.assertions(2);

    // Create a new HolbertonCourse object
    const course = new HolbertonCourse('ES6', 8, ['Bob', 'Jane']);

    // Set a new value for the name attribute
    course.name = 'Python 101';

    // Verify that the name attribute has been updated
    expect(course.name).toBe('Python 101');
  });

  it('should get and set the length attribute', () => {
    // Expect assertions to be called in this test case
    expect.assertions(2);

    // Create a new HolbertonCourse object
    const course = new HolbertonCourse('ES6', 8, ['Bob', 'Jane']);

    // Set a new value for the length attribute
    course.length = 10;

    // Verify that the length attribute has been updated
    expect(course.toHavelength).toBe(10);
  });

  it('should get and set the students attribute', () => {
    // Expect assertions to be called in this test case
    expect.assertions(2);

    // Create a new HolbertonCourse object
    const course = new HolbertonCourse('ES6', 8, ['Bob', 'Jane']);

    // Set a new value for the students attribute
    course.students = ['Alice', 'John'];

    // Verify that the students attribute has been updated
    expect(course.students).toStrictEqual(['Alice', 'John']);
  });
});

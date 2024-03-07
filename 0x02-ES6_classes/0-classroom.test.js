import ClassRoom from './0-classroom';

// Test suite for the ClassRoom class
describe('classRoom', () => {
  // Test case for the constructor
  describe('constructor', () => {
    it('should create a ClassRoom object with the specified maxStudentsSize attribute', () => {
      expect.assertions(2); // Specify number of assertions
      const room = new ClassRoom(25);
      expect(room).toBeInstanceOf(ClassRoom); // Ensure it's an instance of ClassRoom
      expect(room._maxStudentsSize).toBe(25); // Ensure maxStudentsSize attribute is set correctly
    });
  });
});

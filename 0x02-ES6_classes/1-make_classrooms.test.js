import initializeRooms from './1-make_classrooms';
import ClassRoom from './0-classroom';

describe('initializeRooms', () => {
  it('should return an array of ClassRoom objects with specified sizes', () => {
    expect.assertions(7); // Adjusted number of assertions
    const rooms = initializeRooms();
    expect(rooms).toHaveLength(3); // Ensure array length is 3
    rooms.forEach((room) => {
      expect(room).toBeInstanceOf(ClassRoom); // Ensure each element is an instance of ClassRoom
      expect(typeof room._maxStudentsSize).toBe('number'); // Ensure maxStudentsSize attribute is a number
    });
  });
});

// Importing the ClassRoom class
import ClassRoom from './0-classroom';

// Defining the function to initialize rooms
function initializeRooms() {
  // Creating an array of ClassRoom objects with specified sizes
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
  return rooms;
}

export default initializeRooms;

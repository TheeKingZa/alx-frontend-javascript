// 2-get_students_by_loc.js

/**
 * Returns an array of students located in a specific city.
 * @param {Array} students Array of student objects
 * @param {String} city City name
 * @returns {Array} Array of student objects located in the specified city
 */
function getStudentsByLocation(students, city) {
  // Use filter to return students located in the specified city
  return students.filter((student) => student.location === city);
}

export default getStudentsByLocation;

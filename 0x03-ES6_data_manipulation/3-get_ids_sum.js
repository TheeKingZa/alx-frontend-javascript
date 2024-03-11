// 3-get_ids_sum.js

/**
 * Returns the sum of all student ids.
 * @param {Array} students Array of student objects
 * @returns {Number} Sum of all student ids
 */
function getStudentIdsSum(students) {
  // Use reduce to calculate the sum of all student ids
  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;

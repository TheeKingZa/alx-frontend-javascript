// 1-get_list_student_ids.js

/**
 * Returns an array of student ids from a list of objects.
 * @param {Array} list Array of objects representing students
 * @returns {Array} Array of student ids
 */
function getListStudentIds(list) {
  // Check if the argument is an array
  if (!Array.isArray(list)) {
    return [];
  }
  // Use map to extract ids from each student object
  return list.map((student) => student.id);
}

export default getListStudentIds;

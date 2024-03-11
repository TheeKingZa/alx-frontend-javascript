// 4-update_grade_by_city.js

/**
 * Returns an array of students for a specific city with their new grade.
 * @param {Array} students Array of student objects
 * @param {String} city City name
 * @param {Array} newGrades Array of objects containing studentId and grade
 * @returns {Array} Array of student objects with updated grades
 */
function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (newGrade) {
        return { ...student, grade: newGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}

export default updateStudentGradeByCity;

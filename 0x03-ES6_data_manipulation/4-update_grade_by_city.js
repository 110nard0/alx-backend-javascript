/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(studentArray, city, newGrades) {
  return studentArray
    .filter((student) => student.location === city)
    .map((student) => {
      const studentIds = newGrades.map((grade) => grade.studentId);

      if (studentIds.includes(student.id)) {
        newGrades.forEach((gradeBook) => {
          if (student.id === gradeBook.studentId) {
            student.grade = gradeBook.grade;
          }
        });
      } else {
        student.grade = 'N/A';
      }
      return student;
    });
}

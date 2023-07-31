export default function getStudentIdsSum(studentArray) {
  return studentArray.reduce((accum, student) => accum + student.id, 0);
}

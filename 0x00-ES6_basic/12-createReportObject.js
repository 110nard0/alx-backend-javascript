export default function createReportObject(employeesList) {
  const employees = {
    allEmployees: {...employeesList},

    getNumberOfDepartments(employeesList) {
      let employeeCount = 0;

      for (const department in this.allEmployees) {
        employeeCount += 1;
      }
      return employeeCount;
    }
  };

  return employees;
}

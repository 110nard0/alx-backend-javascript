// Create and export subject class instances
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: 'Betty',
  lastName: 'Holberton',
  experienceTeachingC: 10
};

// Set CPP teacher and log method repsonses
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Set Java teacher and log method repsonses
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Set React teacher and log method repsonses
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
